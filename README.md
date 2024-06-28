<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Description

With this API we can acess a REST API of movies.
We used NestJS, TypeORM and postgreSQL  
To achieve our goals we created the two resources using nest, the movies and the genres. 


/movies 
GET - ListMovies 
POST . AddMovie ({
        "title": "On the matrix",
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "releaseDate": "2009",
        "genres": [
            {
                "name": "Action"
            },
            {
                "name": "Sci-Fi"
            },
            {
                "name": "Life Goals"
            }
        ]
    })

/movies/:title (including spaces, for example:"movies/on the matrix")

PUT - UpdateMovie with: title
DELETE - DeleteMovie with :title

/genres
GET -ListGenres
POST - AddGenre({
                "name": "Action"
            })

/genres:title (including spaces, for example:"Life Goals")

DELETE - DeleteGenre
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
