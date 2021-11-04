const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc")

const swaggerDocsRouter = express.Router();

const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Capstone API Starter",
            version: "1.0.0",
            description:
                "This is the starter app for the capstone",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "localhost"
            },
        ],
    },
    apis: ["./routes/user.routes.js"],
};

const specs = swaggerJsdoc(options);

swaggerDocsRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))

module.exports = swaggerDocsRouter;