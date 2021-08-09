import { Module, RequestMethod } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { Categories } from './models/categories.model';
import { Departments } from './models/departments.model';
import { Products } from './models/products.model';
import { CatDepValidationMiddleware } from '../shared/middlewares/validate-catdep.middleware';
import { ProductValidationMiddleware } from '../shared/middlewares/validate-product.middleware';
import { Sizes } from './models/sizes.model';
import {
  CATEGORIESREPO,
  DEPARTMENTSREPO,
  PRODUCTSREPO,
  SIZESREPO,
} from '../shared/constants/repository';

@Module({
  controllers: [StoreController],
  providers: [
    StoreService,
    {
      provide: PRODUCTSREPO,
      useValue: Products,
    },
    {
      provide: DEPARTMENTSREPO,
      useValue: Departments,
    },
    {
      provide: CATEGORIESREPO,
      useValue: Categories,
    },
    {
      provide: SIZESREPO,
      useValue: Sizes,
    },
  ],
})
export class StoreModule {
  configure(consumer) {
    consumer
      .apply(ProductValidationMiddleware)
      .forRoutes({ path: 'store/product', method: RequestMethod.POST }),
      consumer
        .apply(CatDepValidationMiddleware)
        .forRoutes(
          { path: 'store/category', method: RequestMethod.POST },
          { path: 'store/department', method: RequestMethod.POST },
        );
  }
}
