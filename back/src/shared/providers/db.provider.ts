import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, STAGING, TEST, PRODUCTION } from '../constants/db';
import { databaseConfig } from '../configs/db';
import { Departments } from '../../store/models/departments.model';
import { Categories } from '../../store/models/categories.model';
import { Products } from '../../store/models/products.model';
import { Sizes } from '../../store/models/sizes.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case STAGING:
          config = databaseConfig.staging;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
      }

      if (process.env.TEST === 'true') {
        const sequelize = new Sequelize(config);
        sequelize.addModels([Departments, Categories, Sizes, Products]);
        return sequelize.close();
      } else {
        console.log('DATABASE: ', config);
        const sequelize = new Sequelize(config);
        sequelize.addModels([Departments, Categories, Sizes, Products]);
        await sequelize.sync({ force: false });
        return sequelize;
      }
    },
  },
];
