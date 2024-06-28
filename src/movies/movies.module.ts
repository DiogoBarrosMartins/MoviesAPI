import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../movies/entities/movie.entity';
import { MoviesService } from '../movies/movies.service';
import { MoviesController } from '../movies/movies.controller';
import { Genre } from 'src/genres/entities/genre.entity';
import { GenresService } from 'src/genres/genres.service';


@Module({
  imports: [TypeOrmModule.forFeature([Movie]),TypeOrmModule.forFeature([Genre]), ],
  providers: [MoviesService, GenresService],
  controllers: [MoviesController],
})
export class MovieModule {}
