/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();
const port: number = parseInt(<string>process.env.PORT) || 3306;
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrationsTransactionMode: 'each',
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: false,
  synchronize: true,
  migrationsRun: process.env.NODE_ENV === 'test',
  dropSchema: process.env.NODE_ENV === 'test',
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}']
};

export const AppDataSource = new DataSource(dataSourceOptions);
