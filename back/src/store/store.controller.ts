import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Query,
  Res,
} from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ICategory } from '../shared/interfaces/category.interface';
import { IDepartment } from '../shared/interfaces/department.interface';
import { IProduct } from '../shared/interfaces/product.interface';
import {
  NO_PRODUCTS_FOUND,
  PRODUCT_DELETED,
  PRODUCT_NOT_FOUND,
} from '../shared/constants/messages';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  //products routes

  @Get('products')
  async getAllProducts(@Query('page') page: string, @Res() res) {
    const response = await this.storeService.getProducts(parseInt(page));
    res.status(HttpStatus.OK).send({
      success: true,
      data: {
        found: response.count,
        pages: Math.ceil(response.count / 6),
        products: response.rows,
        featured: response.random,
      },
    });
  }

  @Get('product/:id')
  async getOne(@Param('id') id, @Res() res) {
    const response = await this.storeService.getProduct(id);

    if (response) {
      res.status(HttpStatus.OK).send({
        success: true,
        data: response,
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: PRODUCT_NOT_FOUND },
      });
    }
  }

  @Post('product')
  async createProduct(@Body() product: IProduct) {
    return {
      success: true,
      data: await this.storeService.createProduct(product),
    };
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id, @Res() res) {
    const response = await this.storeService.deleteProduct(id);
    if (response) {
      res.status(HttpStatus.OK).send({
        success: true,
        data: { message: PRODUCT_DELETED },
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: PRODUCT_NOT_FOUND },
      });
    }
  }

  @Put('product/:id')
  async updateProduct(@Param('id') id, @Body() data, @Res() res) {
    const response = await this.storeService.updateProduct(id, data);
    if (response) {
      res.status(HttpStatus.OK).send({
        success: true,
        data: response,
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: PRODUCT_NOT_FOUND },
      });
    }
  }

  //search

  @Get('findby?')
  async findBy(
    @Query('department') department: string,
    @Query('category') category: string,
    @Query('limit') limit: string,
    @Query('page') page: string,
    @Query('by') by: string,
    @Query('order') order: string,
    @Res() res,
  ) {
    const response = await this.storeService.findBy(
      parseInt(department),
      parseInt(category),
      parseInt(limit),
      parseInt(page),
      by,
      order,
    );

    if (response.count === 0) {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: NO_PRODUCTS_FOUND },
      });
    } else {
      res.status(HttpStatus.OK).send({
        success: true,
        data: {
          found: response.count,
          pages: Math.ceil(response.count / parseInt(limit)),
          products: response.rows,
          featured: response.random,
        },
      });
    }
  }

  @Get('search?')
  async findByName(
    @Query('name') name: string,
    @Query('page') page: string,
    @Res() res,
  ) {
    const response = await this.storeService.findByName(name, parseInt(page));
    if (response.count === 0) {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: NO_PRODUCTS_FOUND },
      });
    } else {
      res.status(HttpStatus.OK).send({
        success: true,
        data: {
          found: response.count,
          pages: Math.ceil(response.count / 10),
          products: response.rows,
        },
      });
    }
  }

  //departments routes
  @Post('department')
  async createDepartment(@Body() department: IDepartment) {
    return {
      success: true,
      data: await this.storeService.crateDepartment(department),
    };
  }

  @Get('getAllByDep?')
  async getAllByDep(
    @Query('department') department: string,
    @Query('limit') limit: string,
    @Query('page') page: string,
    @Res() res,
  ) {
    const response = await this.storeService.getAllFromDep(
      parseInt(department),
      parseInt(limit),
      parseInt(page),
    );

    if (response.rows.length === 0) {
      res.status(HttpStatus.NOT_FOUND).send({
        success: false,
        data: { message: NO_PRODUCTS_FOUND },
      });
    } else {
      res.status(HttpStatus.OK).send({
        success: true,
        data: {
          found: response.count,
          pages: Math.ceil(response.count / parseInt(limit)),
          products: response.rows,
        },
      });
    }
  }

  //categories routes

  @Post('category')
  async createCategory(@Body() category: ICategory) {
    return {
      success: true,
      data: await this.storeService.createCategory(category),
    };
  }
}
