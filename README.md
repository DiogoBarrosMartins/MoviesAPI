<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# NestJS Movie API

## Description
This project is a REST API for managing movies and genres using the NestJS framework. The API allows users to perform CRUD operations for movies and genres, search for movies by title or genre, and more.

## Requirements
- Node.js
- NPM or Yarn or 
- A SQL database (PostgreSQL, MySQL, etc.)

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/DiogoBarrosMartins/MoviesAPI
    cd movie-api
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Configure the database connection
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
     ```env
     DATABASE_TYPE=your_database_type # e.g., postgres, mysql
     DATABASE_HOST=your_database_host
     DATABASE_PORT=your_database_port
     DATABASE_USERNAME=your_database_username
     DATABASE_PASSWORD=your_database_password
     DATABASE_NAME=your_database_name
     ```



## Running the Application

1. Start the server
    ```bash
     npm run start:dev
    ```
   - The server will start on `http://localhost:3000`.

## API Endpoints

### Movies

- **List Movies**
  - **GET** `/movies`
  - **Description:** Retrieves a list of all movies.
  - **Response:**
    ```json
    [
      {
        "title": "Movie Title",
        "description": "Movie Description",
        "releaseDate": "2023",
        "genres": [
          {
            "name": "Rock",
          }
        ],

      }
    ]
    ```

- **Add Movie**
  - **POST** `/movies`
  - **Description:** Adds a new movie.
  - **Request Body:**
    ```json
    {
      "title": "Movie Title",
      "description": "Movie Description",
      "releaseDate": "2023",
      "genreNames": ["Genre1", "Genre2"]
    }
    ```
  - **Response:**
    ```json
    {

      "title": "Movie Title",
      "description": "Movie Description",
      "releaseDate": "2023-01-01",
      "genres": [
        {
          "name": "Genre1"
        },
        {
          "name": "Genre2"
        }
      ]
    }
    ```

- **Update Movie**
  - **PUT** `/movies/:title`
  - **Description:** Updates the details of a specific movie.
  - **Request Body:**
    ```json
    {
      "title": "Updated Movie Title",
      "description": "Updated Movie Description",
      "releaseDate": "2023-01-01",
      "genreNames": ["Genre1", "Genre2"]
    }
    ```
  - **Response:**
    ```json
    {
      "title": "Updated Movie Title",
      "description": "Updated Movie Description",
      "releaseDate": "2023-01-01",
      "genres": [
        {
          "name": "Genre1"
        },
        {
          "name": "Genre2"
        }
      ]
    }
    ```

- **Delete Movie**
  - **DELETE** `/movies/:title`
  - **Description:** Deletes a specific movie.

### Genres

- **List Genres**
  - **GET** `/genres`
  - **Description:** Retrieves a list of all genres.
  - **Response:**
    ```json
    [
      {
        "name": "Genre Name"
      }
    ]
    ```

- **Add Genre**
  - **POST** `/genres`
  - **Description:** Adds a new genre.
  - **Request Body:**
    ```json
    {
      "name": "Genre Name"
    }
    ```
  - **Response:**
    ```json
    {
      "name": "Genre Name"
    }
    ```

- **Delete Genre**
  - **DELETE** `/genres/:name`
  - **Description:** Deletes a specific genre. The genre will also be removed from all movies that have it.


