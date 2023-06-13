// import book model from models
import UserModel from "../models/user.model.js";

/**
 * Regresa los registros de la DB
 * @returns
 */
export const getAllUsers = async () => {
  try {
    const responseGet = await UserModel.findAll({
      attributes: [
        "name",
        "last_names",
        "dni",
        "residence",
        "town",
        "province",
        "birthdate",
      ],
    });
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
export const getOneUser = async (id) => {
  try {
    const responseGet = await UserModel.findOne({
      attributes: [
        "name",
        "last_names",
        "dni",
        "residence",
        "town",
        "province",
        "birthdate",
      ],
      where: { id },
    });
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewUser = async (user) => {
  try {
    const responseCreate = await UserModel.create(user);
    return responseCreate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const updateOneUser = async (id, userUpdated) => {
  try {
    const responseUpdate = await UserModel.update(userUpdated, { where: { id } });
    return responseUpdate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const deleteOneUser = async (id) => {
  try {
    const responseDelete = await UserModel.destroy({ where: { id } });
    return responseDelete;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};
