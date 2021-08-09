import { Inject, Injectable } from '@nestjs/common';
import { Departments } from './models/departments.model';
import { Op } from 'sequelize';
import { Products } from './models/products.model';
import { Categories } from './models/categories.model';
import { IProduct } from '../shared/interfaces/product.interface';
import { ICategory } from '../shared/interfaces/category.interface';
import { IDepartment } from '../shared/interfaces/department.interface';
import { Sizes } from './models/sizes.model';
import {
  CATEGORIESREPO,
  DEPARTMENTSREPO,
  PRODUCTSREPO,
  SIZESREPO,
} from '../shared/constants/repository';
import {
  BASE_ATRIBUTES,
  CATEGORY,
  DEPARTMENT,
  ID,
  NAME,
  SIZE,
  SIZES,
} from '../shared/constants/query';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class StoreService {
  constructor(
    @Inject(PRODUCTSREPO)
    private productsRepository: typeof Products,

    @Inject(DEPARTMENTSREPO)
    private departmentsRepository: typeof Departments,

    @Inject(CATEGORIESREPO)
    private categoriesRepository: typeof Categories,

    @Inject(SIZESREPO)
    private sizesRepository: typeof Sizes,
  ) {}

  //products methods
  async getProducts(page: number) {
    const rows = await this.productsRepository.findAll<Products>({
      offset: 6 * (page - 1),
      limit: 6,
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          include: [DEPARTMENT],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });
    const count = await this.productsRepository.count();

    const random = await this.productsRepository.findAll({
      order: [Sequelize.fn('RAND')],
      limit: 6,
    });

    return { count, rows, random };
  }

  async getProduct(id: number) {
    return await this.productsRepository.findOne<Products>({
      where: { id },
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          include: [DEPARTMENT],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });
  }

  async createProduct(product: IProduct): Promise<Products> {
    const productToCreate = await this.productsRepository.create<Products>(
      product,
    );

    await Promise.all(
      product.sizes.map(async (size) => {
        const data = { size, prodId: productToCreate.id };
        await this.sizesRepository.create<Sizes>(data);
      }),
    );

    return productToCreate;
  }

  async deleteProduct(id: number): Promise<number> {
    const data = await this.productsRepository.destroy({
      where: { id },
    });

    return data;
  }

  async updateProduct(
    id: number,
    product: IProduct,
  ): Promise<Products | boolean> {
    const productToUpdate = await this.productsRepository.findOne<Products>({
      where: { id },
    });
    return productToUpdate ? await productToUpdate.update(product) : false;
  }

  //search

  async findBy(
    departmentId: number,
    categoryId: number,
    limit: number,
    page: number,
    by: string,
    order: string,
  ) {
    const rows = await this.productsRepository.findAll<Products>({
      offset: limit * (page - 1),
      limit: limit,
      order: [[`${by ? by : 'updatedAt'}`, `${order ? order : 'ASC'}`]],
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          where: { id: categoryId },
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
              where: { id: departmentId },
            },
          ],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });

    const count = await this.productsRepository.count({
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          where: { id: categoryId },
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
              where: { id: departmentId },
            },
          ],
        },
      ],
    });

    const random = await this.productsRepository.findAll({
      order: [Sequelize.fn('RAND')],
      limit: 3,
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          where: { id: categoryId },
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
              where: { id: departmentId },
            },
          ],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });

    return { count, rows, random };
  }

  async findByName(name: string, page: number) {
    const rows = await this.productsRepository.findAll<Products>({
      offset: 10 * (page - 1),
      limit: 10,
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [
        {
          model: Categories,
          as: CATEGORY,
          attributes: [ID, NAME],
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
            },
          ],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });
    const count = await this.productsRepository.count({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    return { count, rows };
  }

  //departments methods

  async crateDepartment(department: IDepartment): Promise<Departments> {
    return await this.departmentsRepository.create(department);
  }

  async getAllFromDep(departmentId: number, limit: number, page: number) {
    const rows = await this.productsRepository.findAll<Products>({
      offset: limit * (page - 1),
      limit: limit,
      order: [['id', 'DESC']],
      include: [
        {
          model: Categories,
          as: CATEGORY,
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
              where: { id: departmentId },
            },
          ],
        },
        {
          model: Sizes,
          as: SIZES,
          attributes: [SIZE],
        },
      ],
      attributes: [...BASE_ATRIBUTES],
    });

    const count = await this.productsRepository.count({
      include: [
        {
          model: Categories,
          as: CATEGORY,
          include: [
            {
              model: Departments,
              as: DEPARTMENT,
              where: { id: departmentId },
            },
          ],
        },
      ],
    });

    return { count, rows };
  }

  // categories methods

  async createCategory(category: ICategory): Promise<Categories> {
    return await this.categoriesRepository.create(category);
  }
}
