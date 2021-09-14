import * as dotenv from 'dotenv';
import { IDatabaseConfig } from '../interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  staging: {
    dialect: 'sqlite',
    storage: './src/infra/database/staging.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: './src/infra/database/test.sqlite',
    logging: false,
  },
  production: {
    dialect: 'sqlite',
    storage: './back/dist/infra/database/production.sqlite',
  },
};
