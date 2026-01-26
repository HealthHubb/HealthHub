'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    (await queryInterface.addColumn('Users', 'height', {
      type: DataTypes.INTEGER,
      allowNull: true,
    }),
      await queryInterface.addColumn('Users', 'imc', {
        type: DataTypes.JSON,
        allowNull: true,
      }),
      await queryInterface.addColumn('Users', 'gender', {
        type: DataTypes.STRING,
        allowNull: true,
      }),
      await queryInterface.addColumn('Users', 'age', {
        type: DataTypes.INTEGER,
        allowNull: true,
      }));
    await queryInterface.addColumn('Users', 'bmr', {
      type: DataTypes.FLOAT,
      allowNull: true,
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeColumn('Users', 'height');
    await queryInterface.removeColumn('Users', 'imc');
    await queryInterface.removeColumn('Users', 'gender');
    await queryInterface.removeColumn('Users', 'age');
    await queryInterface.removeColumn('Users', 'bmr');
  },
};
