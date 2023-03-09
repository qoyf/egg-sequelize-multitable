import * as sequelize from 'sequelize';
import * as SequelizeMultitableType from './lib/model';

interface EggSequelizeMultitableOptions extends sequelize.Optional {
  /**
   * sync
   */
  sync?: sequelize.SyncOptions | boolean
  /**
   * agent Thread load or not
   */
  agent?: boolean;
  /**
   * app Thread load or not
   */
  app?: boolean;
  /**
   * load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
   */
  delegate?: string;

  /**
   * load models from `app/model/*.js`
   */
  baseDir?: string;

  /**
   * ignore `app/${baseDir}/index.js` when load models, support glob and array
   */
  exclude?: string | Array<string>;

  /**
   * A full database URI
   * @example
   * `connectionUri:"mysql://localhost:3306/database"`
   */
  connectionUri?: string;

}
interface DataSources {
  datasources: EggSequelizeMultitableOptions[];
}

declare module 'egg' {
  interface IModel extends sequelize.Sequelize, PlainObject { }
  // extend app
  interface Application {
    Sequelize: typeof sequelize;
    model: IModel;
  }

  // extend context
  interface Context {
    model: IModel;
  }
  // extend your config
  interface EggAppConfig {
    sequelizeMultitable: EggSequelizeMultitableOptions | DataSources;
  }
}
