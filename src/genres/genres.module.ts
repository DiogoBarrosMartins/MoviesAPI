import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from '../genres/entities/genre.entity';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { Movie } from 'src/movies/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre]), TypeOrmModule.forFeature([Movie])],
  providers: [GenresService],
  controllers: [GenresController],
})
export class GenresModule {}
