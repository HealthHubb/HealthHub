import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

class ClientProfile extends Model {
  public id!: number;
  public userId!: number;
  public birthDate!: Date;
  public weight!: number;
  public height!: number;
  public gender!: string;
  public activityLevel!: string;
  public goal!: string;
  public notes!: string;
}

ClientProfile.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activityLevel: {
      type: DataTypes.ENUM(
        "SEDENTARY",
        "LIGHT",
        "MODERATE",
        "HIGH",
        "VERY_HIGH"
      ),
      allowNull: false,
    },
    goal: {
      type: DataTypes.ENUM(
        "WEIGHT_LOSS",
        "WEIGHT_GAIN",
        "MAINTENANCE",
        "HEALTH"
      ),
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "client_profiles",
  }
);

export default ClientProfile;
