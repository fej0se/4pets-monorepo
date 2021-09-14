import { IDatabaseConfig } from '../interfaces/dbConfig.interface';

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
    storage: './dist/infra/database/production.sqlite',
  },
};
