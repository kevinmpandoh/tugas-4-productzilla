import { Request, Response } from "express";

// Model
import { Book } from "../models/Book";

// CRUD
const bookController = {
  // Get all books

  getBooks: async (req: Request, res: Response) => {
    try {
      const books = await Book.find();
      return res.status(200).json({
        status: "success",
        message: "Books retrieved successfully",
        data: books,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },

  // Create a book
  createBook: async (req: Request, res: Response) => {
    try {
      const { title, author, year, genre } = req.body;
      const book = new Book({
        title,
        author,
        year,
        genre,
      });
      await book.save();
      return res.status(201).json({
        status: "success",
        message: "Book created successfully",
        data: book,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },
  getBookById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({
          status: "error",
          message: "Book not found",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Book retrieved successfully",
        data: book,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },
  updateBook: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, author, year, genre } = req.body;
      const book = await Book.findByIdAndUpdate(
        id,
        { title, author, year, genre },
        { new: true }
      );
      if (!book) {
        return res.status(404).json({
          status: "error",
          message: "Book not found",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "Book updated successfully",
        data: book,
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },

  deleteBook: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const book = await Book.findByIdAndDelete(id);
      if (!book) {
        return res.status(404).json({
          status: "error",
          message: "Book not found",
        });
      }

      return res.status(200).json({
        status: "success",
        message: "Book deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

module.exports = bookController;
