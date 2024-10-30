const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentation",
      version: "1.0.0",
      description: "API Documentation for Express API",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:8000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Book: {
          type: "object",
          required: ["title", "code", "author", "year"],
          properties: {
            title: {
              type: "string",
              description: "The title of the book",
            },
            code: {
              type: "string",
              description: "The code of the book",
            },
            author: {
              type: "string",
              description: "The author of the book",
            },
            year: {
              type: "number",
              description: "The year the book was published",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*"],
};

export default swaggerConfig;
