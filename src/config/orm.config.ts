import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Entities from '../apps';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: __dirname + '/./../../dev.env',
});

export const devORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [...Object.keys(Entities).map((key) => Entities[key])],
  synchronize: true,
};
