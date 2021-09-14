export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  logging?: boolean;
}

export interface ISQLiteConfigAttributes {
  dialect: string;
  storage: string;
}

export type Database = IDatabaseConfigAttributes | ISQLiteConfigAttributes;

export interface IDatabaseConfig {
  staging: Database;
  test: Database;
  production: Database;
}
