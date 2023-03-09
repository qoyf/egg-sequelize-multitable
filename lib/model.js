'use strict';
const sequelize = require("sequelize");
class EggSequelizeMultitable {
    /**
     * constructor
      * @param {string} name
      * @param {Egg.EggApplication} app
      * @param {sequelize.Sequelize} sequelize
      * @param {import("..").EggSequelizeMultitableOptions} config
      * @param {sequelize.ModelAttributes} attributes
      * @param {sequelize.ModelOptions} options
      */
    constructor(name, app, sequelize, config, attributes, options) {
        this.map = {};
        this.name = name;
        this.config = config;
        this.app = app;
        this.sequelize = sequelize;
        this._options = options;
        this._attributes = attributes;
    }
    /**
     * 
     * @param {string} suffix
     */
    async getModel(suffix) {
        suffix = suffix || ' ';
        /**
         * @type {EggSequelizeMultitableModel}
         */
        let module = this.map[suffix];
        if (!module) {
            module = new EggSequelizeMultitableModel(this.name, suffix, this.sequelize, this._attributes, this._options);
            this.map[suffix] = module;
            await this.associate(module);
        }
        return module.mode;
    }
    /**
     * 
     * @param {EggSequelizeMultitableModel} module
     */
    async associate(module) {
        if (this.config.sync) await module.mode.sync(this.config.sync);
    }

}


class EggSequelizeMultitableModel {
    /**
     * constructor
      * @param {string} name
      * @param {string} suffix
      * @param {sequelize.Sequelize} sequelize
      * @param {sequelize.ModelAttributes} attributes
      * @param {sequelize.ModelOptions} options
      */
    constructor(name, suffix, sequelize, attributes, options) {
        this.tableName = `${name}_${suffix}`;
        this.modelName = name;
        this.suffix = suffix;
        this.sequelize = sequelize;
        this.mode = sequelize.define(this.tableName, attributes, options);
    }


}



module.exports = { EggSequelizeMultitable, EggSequelizeMultitableModel };
