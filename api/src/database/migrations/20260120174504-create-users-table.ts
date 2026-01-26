'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Users', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      goal: {
        type: DataTypes.STRING,
      },
      days_per_week: {
        type: DataTypes.INTEGER,
      },
      session_duration: {
        type: DataTypes.INTEGER,
      },
      health_conditions: {
        type: DataTypes.STRING,
      },
      dietary_restrictions: {
        type: DataTypes.STRING,
      },
      daily_activity_level: {
        type: DataTypes.STRING,
      },
      fitnessLevel: {
        type: DataTypes.STRING,
      },
      current_weight: {
        type: DataTypes.FLOAT,
      },
      target_weight: {
        type: DataTypes.FLOAT,
      },
      lang: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Users');
  },
};
