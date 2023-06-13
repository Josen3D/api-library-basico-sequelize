// import book model from models
import LoanModel from "../models/loan.model.js";

/**
 * Regresa los registros de la DB
 * @returns
 */
export const getAllLoans = async () => {
  try {
    const responseGet = await LoanModel.findAllData();
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

/**
 * Pasar id del registro buscado. Regresa registro que coincida con id
 * @param {*} id
 * @returns
 */
export const getOneLoan = async (id) => {
  try {
    const responseGet = await LoanModel.findOneData(id);
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewLoan = async (loan) => {
  try {
    const responseCreate = await LoanModel.create(loan);
    return responseCreate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const updateOneLoan = async (id, loanUpdated) => {
  try {
    const responseUpdate = await LoanModel.update(loanUpdated, {
      where: { id },
    });
    return responseUpdate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const deleteOneLoan = async (id) => {
  try {
    const responseDelete = await LoanModel.destroy({ where: { id } });
    return responseDelete;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};
