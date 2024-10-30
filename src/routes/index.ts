// Importing express
const router = require("express").Router();
const bookRoutes = require("./book.routes");
const authRoutes = require("./auth.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
import swaggerConfig from "../config/swagger.config";

const swaggerSpec = swaggerJSDoc(swaggerConfig);

router.use("/", authRoutes);
router.use("/books", bookRoutes);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
