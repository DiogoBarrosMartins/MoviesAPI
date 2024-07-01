import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';


@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiCreatedResponse({description:'Create a Movie'})
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOkResponse({description:'Get all movies on our API'})
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.moviesService.findOne(title);
  }

  @Get('/search/:title')
  search(@Param('title') title: string) {
    return this.moviesService.search(title);
  }

  @Patch(':title')
  update(@Param('title') title: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(title, updateMovieDto);
  }

  @Delete(':title')
  remove(@Param('title') title: string) {
    return this.moviesService.remove(title);
  }
}
