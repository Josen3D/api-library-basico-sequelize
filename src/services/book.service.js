// import book model from models
import BookModel from "../models/book.model.js";

/**
 * Regresa los registros de la DB
 * @returns
 */
export const getAllBooks = async () => {
  try {
    const responseGet = await BookModel.findAll({
      attributes: [
        "title",
        "editorial",
        "author",
        "genre",
        "author_country",
        "no_pages",
        "edition_year",
        "price",
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
export const getOneBook = async (id) => {
  try {
    const responseGet = await BookModel.findOne({
      attributes: [
        "title",
        "editorial",
        "author",
        "genre",
        "author_country",
        "no_pages",
        "edition_year",
        "price",
      ],
      where: { id },
    });
    return responseGet;
  } catch (error) {
    console.log("Error service: ", error);
  }
};

export const createNewBook = async (book) => {
  try {
    const responseCreate = await BookModel.create(book);
    return responseCreate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const updateOneBook = async (id, book) => {
  try {
    const responseUpdate = await BookModel.update(book, { where: { id } });
    return responseUpdate;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};

export const deleteOneBook = async (id) => {
  try {
    const responseDelete = await BookModel.destroy({ where: { id } });
    return responseDelete;
  } catch (error) {
    console.log("Error Service: ", error);
  }
};
