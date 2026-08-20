const swaggerUi = require('swagger-ui-express');

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Blog API",
    version: "1.0.0",
    description: "A REST API for managing blog articles, with JWT authentication, validation, and pagination."
  },
  paths: {
    "/api/auth/login": {
      post: {
        summary: "Log in as admin to receive a JWT",
        requestBody: {
          content: {
            "application/json": {
              example: { username: "bryan", password: "your_password" }
            }
          }
        },
        responses: {
          200: { description: "Returns a JWT token" },
          401: { description: "Invalid credentials" }
        }
      }
    },
    "/api/articles": {
      get: {
        summary: "Get all articles (paginated)",
        parameters: [
          { name: "page", in: "query", schema: { type: "integer" } },
          { name: "limit", in: "query", schema: { type: "integer" } }
        ],
        responses: {
          200: { description: "Returns paginated list of articles" }
        }
      },
      post: {
        summary: "Create a new article (requires auth)",
        security: [{ bearerAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              example: {
                titre: "Mon article",
                contenu: "Contenu suffisamment long.",
                auteur: "Bryan",
                categorie: "Tech",
                tags: "node,express"
              }
            }
          }
        },
        responses: {
          201: { description: "Article created" },
          400: { description: "Validation error" },
          401: { description: "Missing or invalid token" }
        }
      }
    },
    "/api/articles/search": {
      get: {
        summary: "Search articles by title or content",
        parameters: [
          { name: "query", in: "query", schema: { type: "string" } }
        ],
        responses: {
          200: { description: "Returns matching articles" }
        }
      }
    },
    "/api/articles/{id}": {
      get: {
        summary: "Get a single article by ID",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: {
          200: { description: "Returns the article" },
          404: { description: "Article not found" }
        }
      },
      put: {
        summary: "Update an article (requires auth)",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: {
          200: { description: "Article updated" },
          400: { description: "Validation error" },
          401: { description: "Missing or invalid token" }
        }
      },
      delete: {
        summary: "Delete an article (requires auth)",
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "integer" } }
        ],
        responses: {
          200: { description: "Article deleted" },
          401: { description: "Missing or invalid token" }
        }
      }
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};