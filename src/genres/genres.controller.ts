import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiAcceptedResponse, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  @ApiCreatedResponse({description:'Create a Genre'})
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  @ApiOkResponse({description:'Get all Genres on our API'})
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':name')
  @ApiOkResponse({description:'Get a specific genre on our API using its name'})
  findOne(@Param('name') id: string) {
    return this.genresService.findOne(id);
  }

  @Patch(':name')
  @ApiAcceptedResponse({description:'Get a specific genre on our API using its name'})
  update(@Param('name') name: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(name, updateGenreDto);
  }

  @Delete(':name')
  @ApiAcceptedResponse({description:'Delete a specific genre on our API using its name'})
  remove(@Param('name') name: string) {
    return this.genresService.remove(name);
  }
}
