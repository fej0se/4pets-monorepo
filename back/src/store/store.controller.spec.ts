import { HttpStatus, INestApplication } from '@nestjs/common';

import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import * as request from 'supertest';
import { productsPayload } from '../../test/fixture/products';
import { Products } from './models/products.model';
import { Departments } from './models/departments.model';
import { Categories } from './models/categories.model';
import { Sizes } from './models/sizes.model';

import {
  NO_PRODUCTS_FOUND,
  PRODUCT_DELETED,
  PRODUCT_NOT_FOUND,
} from '../shared/constants/messages';
import { IMAGE_URL } from '../../test/fixture/constants';

describe('StoreController with test env', () => {
  let app: INestApplication;
  process.env.NODE_ENV = 'test';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await Sizes.drop().then(async () => {
      await Products.drop();
      await Categories.drop();
      await Departments.drop();
    });
  });

  it('should get no products', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/products?page=1',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.data.products).toStrictEqual([]);
  });

  it('should create a department', async () => {
    const response = await request(app.getHttpServer())
      .post('/store/department')
      .send({ name: 'Dogs' });

    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body.data.name).toBe('Dogs');
  });

  it('should not create a department with same name', async () => {
    const response = await request(app.getHttpServer())
      .post('/store/department')
      .send({ name: 'Dogs' });

    expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should not create a department whitout parameters', async () => {
    const response = await request(app.getHttpServer()).post(
      '/store/department',
    );

    expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should create a category', async () => {
    const response = await request(app.getHttpServer())
      .post('/store/category')
      .send({ name: 'Roupas', departmentId: 1 });

    expect(response.status).toBe(HttpStatus.CREATED);
    expect(response.body.data.name).toBe('Roupas');
  });

  it('should not create a category with same name', async () => {
    const response = await request(app.getHttpServer())
      .post('/store/category')
      .send({ name: 'Roupas', departmentId: 1 });

    expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should not create a category whitout parameters', async () => {
    const response = await request(app.getHttpServer()).post('/store/category');

    expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should create products', async () => {
    await Promise.all(
      productsPayload.map(async (product) => {
        const response = await request(app.getHttpServer())
          .post('/store/product')
          .send(product);

        expect(response.body.data.name).toBe(product.name);
        expect(response.status).toBe(HttpStatus.CREATED);
      }),
    );
  });

  it('should not create products with missing parameters', async () => {
    const response = await request(app.getHttpServer())
      .post('/store/product')
      .send({ name: 'Coleira Pluto' });

    expect(response.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should get products', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/products?page=1',
    );
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.data.found).toBe(productsPayload.length);
  });

  it('should not delete a product', async () => {
    const response = await request(app.getHttpServer()).delete(
      '/store/product/999999',
    );

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
    expect(response.body.data.message).toBe(PRODUCT_NOT_FOUND);
  });

  it('should delete a product', async () => {
    const response = await request(app.getHttpServer()).delete(
      '/store/product/3',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.message).toBe(PRODUCT_DELETED);
  });

  it('should update a product', async () => {
    const response = await request(app.getHttpServer())
      .put('/store/product/1')
      .send({ image: IMAGE_URL });

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.image).toBe(IMAGE_URL);
  });

  it('should not update a product', async () => {
    const response = await request(app.getHttpServer())
      .put('/store/product/999999')
      .send({ image: IMAGE_URL });

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
    expect(response.body.data.message).toBe(PRODUCT_NOT_FOUND);
  });

  it('should get a product', async () => {
    const response = await request(app.getHttpServer()).get('/store/product/2');

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.id).toBe(2);
  });

  it('should not get a product', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/product/99999',
    );

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
  });

  it('should get 11 products in 6 pages on category/department 1', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/findby?department=1&category=1&limit=2&page=1',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.found).toBe(11);
    expect(response.body.data.pages).toBe(6);
  });

  it('should get 11 products in 6 pages on category/department 1', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/findby?department=1&category=1&limit=2&page=1&by=id&order=DESC',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.found).toBe(11);
    expect(response.body.data.pages).toBe(6);
  });

  it('should not get products with category/department 2', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/findby?department=2&category=2&limit=1&page=1',
    );

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
    expect(response.body.data.message).toBe(NO_PRODUCTS_FOUND);
  });

  it('should not get products with department 10', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/getAllByDep?department=10&limit=2&page=1',
    );

    console.log(response.body);

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
    expect(response.body.data.message).toBe(NO_PRODUCTS_FOUND);
  });

  it('should get products with department 1', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/getAllByDep?department=1&limit=2&page=1',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
  });

  it('should find a product by name', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/search?name=superman&page=1',
    );

    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body.success).toBeTruthy;
    expect(response.body.data.found).toBe(2);
    expect(response.body.data.products[0].name).toContain('superman');
  });

  it('should not find product by name', async () => {
    const response = await request(app.getHttpServer()).get(
      '/store/search?name=skywalker&page=1',
    );

    expect(response.status).toBe(HttpStatus.NOT_FOUND);
    expect(response.body.success).toBeFalsy;
    expect(response.body.data.message).toBe(NO_PRODUCTS_FOUND);
  });
});
