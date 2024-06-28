import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from '../genres/entities/genre.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class GenresService {

  
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto) {
    const genre = this.genreRepository.create(createGenreDto);
    const savedGenre= await this.genreRepository.save(genre)
    return plainToClass(Genre, savedGenre);
  }

  async findAll() {
    const genres = await this.genreRepository.find({ relations: ['movies'] });
     return genres.map(genre => plainToClass(Genre, genre))
  }

  async findOne(name: string): Promise<Genre> {
    const genre = await this.genreRepository.findOne({
       where: { name }, relations: ['movies']});
    if (!genre) {
      throw new NotFoundException(`Genre with name ${name} not found`);
    }
    return plainToClass(Genre, genre);
  }

  async update(name: string, updateGenreDto: UpdateGenreDto) {
    const genre = await this.findOne(name);
    if (!genre) {
      throw new NotFoundException('No movie with that title found, update failed');
    }
    Object.assign(genre, updateGenreDto);
    const updatedGenre=  await this.genreRepository.save(genre);
    return plainToClass(Genre, updatedGenre);
  }

  
  async remove(name: string) {
    const genre = await this.findOne(name);
    if(!genre){
      throw new NotFoundException('No movie with that title found, update failed');
    }
    return await this.genreRepository.remove(genre);
  }


  
}
