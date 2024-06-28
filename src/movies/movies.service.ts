import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from '../movies/entities/movie.entity';
import { plainToClass } from 'class-transformer';
import { GenresService } from 'src/genres/genres.service';

@Injectable()
export class MoviesService {

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private genresService: GenresService
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const { genres: genreDtos, ...movieData } = createMovieDto;

    if (!genreDtos || !Array.isArray(genreDtos)) {
      throw new BadRequestException('Genres must be provided and must be an array.');
    }

    const genres = await Promise.all(
      genreDtos.map(async (genreDto) => {
        let genre = await this.genresService.findOne(genreDto.name);
        if (!genre) {
          genre = await this.genresService.create({ name: genreDto.name });
        }
        return genre;
      })
    );

    const movie = this.movieRepository.create({
      ...movieData,
      genres,
    });

    return this.movieRepository.save(movie);
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

  
  async findById(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      where: { id: id },
      relations: ['genres'],
    });

    if (!movie) {
      throw new NotFoundException(`Movie with title ${id} not found`);
    }

    return movie;
  }


  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const { genres: genreDtos, ...updateData } = updateMovieDto;

    const movie = await this.movieRepository.findOne({
      where: { title: id },
      relations: ['genres'],
    });
    if (!movie) {
      throw new NotFoundException(`Movie with title ${id} not found`);
    }

    if (genreDtos) {
      const genres = await Promise.all(
        genreDtos.map(async (genreDto) => {
          let genre = await this.genresService.findOne(genreDto.name);
          if (!genre) {
            genre = await this.genresService.create({ name: genreDto.name });
          }
          return genre;
        })
      );
      movie.genres = genres;
    }

    Object.assign(movie, updateData);
    return this.movieRepository.save(movie);
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
