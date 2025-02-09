import { makeSalt } from 'src/utils/crypto';
import { loadConfig } from 'src/utils/loadConfig';

export interface Config {
  mongoUrl: string;
  jwtSecret: string;
  staticPath: string;
  walineDB: string;
  demo: boolean | string;
  log: string;
}

export const config: Config = {
  mongoUrl: loadConfig(
    'database.url',
    `mongodb://mongo:27017/vanBlog?authSource=admin`,
  ),
  jwtSecret: makeSalt(),
  staticPath: loadConfig('static.path', '/app/static'),
  demo: loadConfig('demo', false),
  walineDB: loadConfig('waline.db', 'waline'),
  log: loadConfig("log",'/var/log')
};
