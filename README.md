# 📝 BLOG-API

A REST API for managing blog articles, built with Node.js, Express, and SQLite — featuring JWT authentication, input validation, centralized error handling, and pagination.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtoken&logoColor=white)

---
## About This Project

[#about-this-project](#about-this-project)

This API was originally built as a coursework assignment for **INF222 (Backend Development)** at the University of Yaoundé I. After completing the initial requirements, I extended it with several production-oriented features to deepen my understanding of REST API design and backend security practices:

- ✅ Input validation on all write operations
- ✅ Centralized error handling middleware
- ✅ JWT-based authentication protecting write operations
- ✅ Pagination on the article listing endpoint
- ✅ Environment-based configuration (`.env`)

---
## Tech Stack

[#tech-stack](#tech-stack)

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | SQLite |
| Authentication | JSON Web Tokens (jsonwebtoken) |
| Validation | express-validator |
| Documentation | Swagger UI |
| Config | dotenv |

---
## Getting Started

[#getting-started](#getting-started)

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
```bash
   git clone https://github.com/Mnt-Bryan/BLOG-API.git
   cd BLOG-API
```

2. Install dependencies
```bash
   npm install
```

3. Create a `.env` file in the project root with the following variables:
JWT_SECRET=your_long_random_secret_here
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
PORT=3000


4. Start the server
```bash
   npm start
```

The API will be running at `http://localhost:3000`, with Swagger documentation available at `http://localhost:3000/api-docs` (once configured — see note below).

---

## API Endpoints

[#api-endpoints](#api-endpoints)

Full interactive documentation is available via Swagger UI at `/api-docs` once the server is running.

### Authentication

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/login` | Log in and receive a JWT | No |

### Articles

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/articles` | Get paginated list of articles | No |
| GET | `/api/articles/search?query=` | Search articles by title/content | No |
| GET | `/api/articles/:id` | Get a single article | No |
| POST | `/api/articles` | Create a new article | Yes |
| PUT | `/api/articles/:id` | Update an article | Yes |
| DELETE | `/api/articles/:id` | Delete an article | Yes |

### Example: Creating an article

```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>" \
  -d '{
    "titre": "My First Article",
    "contenu": "This is a sufficiently long article body.",
    "auteur": "Bryan",
    "categorie": "Tech",
    "tags": "node,express"
  }'
```

---
## What I'd Improve Next

[#what-id-improve-next](#what-id-improve-next)

- [ ] Add automated tests (Jest + Supertest)
- [ ] Support multiple users instead of a single hardcoded admin
- [ ] Add rate limiting on the login route to prevent brute-force attempts
- [ ] Migrate field names to English for consistency with future projects
- [ ] Deploy to a live environment (Render/Railway)

---
## Author

[#author](#author)

**Monet Bryan** — Computer Science student at the University of Yaoundé I

- GitHub: [@Mnt-Bryan](https://github.com/Mnt-Bryan)