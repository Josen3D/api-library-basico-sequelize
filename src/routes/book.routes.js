// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/book.controller.js";
// import book validators
import {
  validatorCreateBook,
  validatorGetBooks,
} from "../validators/book.validator.js";
// create router
const router = Router();

// defines routes
router
  .get("/books", getItems)
  .get("/books/:id", validatorGetBooks, getItem)
  .post("/books", validatorCreateBook, createItem)
  .put("/books/:id", validatorGetBooks, validatorCreateBook, updateItem)
  .delete("/books/:id", validatorGetBooks, deleteItem);

// export the router
export default router;
