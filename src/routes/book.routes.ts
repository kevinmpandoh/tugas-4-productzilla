import express from "express";
const route = express.Router();

const {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

route.get("/", getBooks);
route.post("/", createBook);
route.get("/:id", getBookById);
route.put("/:id", updateBook);
route.delete("/:id", deleteBook);

module.exports = route;
