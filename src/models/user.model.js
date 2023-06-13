// import sequelize
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// define sequelize model
const User = sequelize.define(
  "user",
  {
    // define model attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    residence: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default User;
