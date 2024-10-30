import express from "express";
const route = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API endpoints for managing books
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 */
route.get("/", getBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Code already exists
 */
route.post("/", authMiddleware, createBook);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *        description: A book object
 *        content:
 *         application/json:
 *          schema:
 *            type: object
 *         properties:
 *            status:
 *            type: string
 *            message:
 *              type: string
 *            data:
 *              $ref: '#/components/schemas/Book'
 *         example:
 *          status: success
 *          message: Book retrieved successfully
 *          data:
 *            title: "The Great Gatsby"
 *            code: "TGG"
 *            author: "F. Scott Fitzgerald"
 *            year: 1925
 *
 *       404:
 *         description: Book not found
 */

route.get("/:id", getBookById);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 *       400:
 *         description: Code already exists
 */
route.put("/:id", authMiddleware, updateBook);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the book
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *
 *
 */
route.delete("/:id", authMiddleware, deleteBook);

module.exports = route;
