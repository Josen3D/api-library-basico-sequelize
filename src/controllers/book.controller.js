// import matched data from express validator
import { matchedData } from "express-validator";
// import book service
import {
  createNewBook,
  deleteOneBook,
  getAllBooks,
  getOneBook,
  updateOneBook,
} from "../services/book.service.js";
// import httpError handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getItems = async (req, res) => {
  try {
    const response = await getAllBooks();

    res.status(200).send({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS " + error);
  }
};

export const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneBook(id);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM " + error);
  }
};

export const createItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const body = matchedData(req);
    const response = await createNewBook(body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

export const updateItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req);
    const response = await updateOneBook(id, body);

    if (response <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    const book = await getOneBook(id);
    res.status(200).json(book);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM: " + error);
  }
};

export const deleteItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    req = matchedData(req);
    const { id } = req;
    const response = await deleteOneBook(id);

    if (response <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({ message: "item deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM: " + error);
  }
};
