'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.changeColumn('Exercises', 'duration', {
      type: DataTypes.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn('Exercises', 'repetitions', {
      type: DataTypes.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn('Exercises', 'sets', {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.changeColumn('Exercises', 'duration', {
      type: DataTypes.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('Exercises', 'repetitions', {
      type: DataTypes.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('Exercises', 'sets', {
      type: DataTypes.INTEGER,
      allowNull: false,
    });
  },
};
