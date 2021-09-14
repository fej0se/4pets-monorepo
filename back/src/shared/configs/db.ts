import * as dotenv from 'dotenv';
import { IDatabaseConfig } from '../interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  staging: {
    dialect: 'sqlite',
    storage: './infra/database/staging.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: './infra/database/test.sqlite',
    logging: false,
  },
  production: {
    dialect: 'sqlite',
    storage: './infra/database/production.sqlite',
  },
};
