// import Router from express
import { Router } from "express";
// import book controllers
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/user.controller.js";
// import book validators
import {
  validatorCreateUser,
  validatorGetUser,
} from "../validators/user.validator.js";
// create router
const router = Router();

// defines routes
router
  .get("/users", getItems)
  .get("/users/:id", validatorGetUser, getItem)
  .post("/users", validatorCreateUser, createItem)
  .put("/users/:id", validatorGetUser, validatorCreateUser, updateItem)
  .delete("/users/:id", validatorGetUser, deleteItem);

// export the router
export default router;
