// import sequelize
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// define sequelize model
const Loan = sequelize.define(
  "loan",
  {
    // define model attributes
    id_libro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loan_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    return_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default Loan;
