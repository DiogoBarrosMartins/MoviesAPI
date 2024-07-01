<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Movie API

A RESTful API for managing a movie database using NestJS, TypeScript, TypeORM, and PostgreSQL. The API supports CRUD operations for movies and genres.

## Features

- List all movies with pagination.
- Add a new movie with associated genres.
- Update movie details and associated genres.
- Delete a movie.
- List all genres.
- Add a new genre.
- Delete a genre and remove its association from all movies.
- Search for movies by title or genre.

## Prerequisites

- Node.js (>=14.x)
- PostgreSQL

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/movie-api.git
    cd movie-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and configure your database connection:

    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=yourusername
    DATABASE_PASSWORD=yourpassword
    DATABASE_NAME=moviedb
    ```

4. Run the database migrations:

    ```bash
    npm run typeorm migration:run
    ```

## Running the Application

1. Start the NestJS application:

    ```bash
    npm run start:dev
    ```

2. The API will be available at `http://localhost:3000`.

## API Documentation

API documentation is available via Swagger. Once the application is running, visit `http://localhost:3000/api` to view and test the API endpoints.

## API Endpoints

### Movies

- **GET /movies**: List all movies with pagination.
  - Query parameters: `page`, `limit`
- **POST /movies**: Add a new movie.
  - Request body: `{ "title": "string", "description": "string", "releaseDate": "date", "genres": [{ "name": "string" }] }`
- **PATCH /movies/:id**: Update a movie by ID.
  - Request body: `{ "title": "string", "description": "string", "releaseDate": "date", "genres": [{ "name": "string" }] }`
- **DELETE /movies/:id**: Delete a movie by ID.
- **GET /movies/search**: Search for movies by title or genre.
  - Query parameters: `query`

### Genres

- **GET /genres**: List all genres.
- **POST /genres**: Add a new genre.
  - Request body: `{ "name": "string" }`
- **DELETE /genres/:name**: Delete a genre by name and remove its association from all movies.

## Request Logging

Request logging middleware is used to log all incoming requests.

## Data Validation and Error Handling

- The application uses class-validator for data validation.
- Custom error handling is implemented to provide meaningful error messages.

## Postman Collection

A Postman collection for testing the API endpoints is provided. Import the collection from `postman-collection.json` to your Postman application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

