// import matched data from express validator
import { matchedData } from "express-validator";
// import book service
import {
  getAllLoans,
  getOneLoan,
  createNewLoan,
  updateOneLoan,
  deleteOneLoan,
} from "../services/loan.service.js";
// import httpError handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 * Obtiene los registros de la DB
 * @param {*} req
 * @param {*} res
 */
export const getItems = async (req, res) => {
  try {
    const response = await getAllLoans();

    res.status(200).send({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS " + error);
  }
};

/**
 * Obtiene un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneLoan(id);

    if (!response) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).send(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const body = matchedData(req);
    const response = await createNewLoan(body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

/**
 * Actualiza un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req);
    const response = await updateOneLoan(id, body);

    if (response <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    const user = await getOneLoan(id);
    res.status(200).json(book);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM: " + error);
  }
};

/**
 * Eliimina un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    req = matchedData(req);
    const { id } = req;
    const response = await deleteOneLoan(id);

    if (response <= 0) {
      handleHttpError(res, "ITEM_NOT_FOUND", 404);
      return;
    }

    res.status(200).json({ message: "item deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM: " + error);
  }
};
