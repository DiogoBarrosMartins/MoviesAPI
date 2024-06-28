import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') id: string) {
    return this.genresService.findOne(id);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(name, updateGenreDto);
  }

  @Delete(':id')
  remove(@Param('name') name: string) {
    return this.genresService.remove(name);
  }
}
