// import sequelize
import { sequelize } from "../database/mysql.js";
import { DataTypes } from "sequelize";

// define sequelize model
const Book = sequelize.define(
  "book",
  {
    // define model attributes
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edition_year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default Book;
