<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


## Description
It is yet to decide what to do in case a genre gets changed out of a movie, should it be deleted as well? or should it just stay in the database linked to no movies? 

With this API we can acess a REST API of movies.
We used NestJS, TypeORM and POSTGREsql
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
