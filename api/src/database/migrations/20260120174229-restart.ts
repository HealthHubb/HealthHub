'use strict';

import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.dropAllTables();
  },

  async down(queryInterface: QueryInterface) {},
};
