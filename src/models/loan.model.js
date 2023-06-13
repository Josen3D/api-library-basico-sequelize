// import sequelize
import { sequelize } from "../database/mysql.js";
// import data types from sequelize
import { DataTypes } from "sequelize";

// import user model
import User from "../models/user.model.js";
// import book model
import Book from "../models/book.model.js";

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

Loan.belongsTo(User, {
  foreignKey: "id_user",
  as: "user",
});

Loan.belongsTo(Book, {
  foreignKey: "id_libro",
  as: "book",
});

Loan.findAllData = function () {
  return Loan.findAll({
    attributes: ["id", "loan_date", "end_date", "return_date"],
    include: ["user", "book"],
  });
};

Loan.findOneData = function (id) {
  return Loan.findOne({
    attributes: ["id", "loan_date", "end_date", "return_date"],
    include: ["user", "book"],
    where: { id },
  });
};

// export model
export default Loan;
