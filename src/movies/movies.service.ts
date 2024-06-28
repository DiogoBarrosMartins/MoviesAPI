import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from '../movies/entities/movie.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MoviesService {

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = this.movieRepository.create(createMovieDto);
    const savedMovie = await this.movieRepository.save(movie);
    return plainToClass(Movie, savedMovie);
  }

  async findAll() {
    const movies = await this.movieRepository.find({ relations: ['genres'] });
    return movies.map(movie => plainToClass(Movie, movie));
  }

  async findOne(title: string): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      where: { title: title },
      relations: ['genres'],
    });

    if (!movie) {
      throw new NotFoundException(`Movie with title ${title} not found`);
    }

    return plainToClass(Movie, movie);
  }


  async update(title: string, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieRepository.findOne({ where: { title } });
    if (!movie) {
      throw new NotFoundException('No movie with that title found, update failed');
    }
    Object.assign(movie, updateMovieDto);
    const updatedMovie = await this.movieRepository.save(movie);
    return plainToClass(Movie, updatedMovie);
  }


  async remove(title: string) {
    const movie = await this.findOne(title);
    if (!movie) {
      throw new NotFoundException('No movie with that title found, update failed');
    }
    const removedMovie = await this.movieRepository.remove(movie);
    return plainToClass(Movie, removedMovie);
  }
}
