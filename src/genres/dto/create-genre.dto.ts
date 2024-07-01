import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, } from 'class-validator';

export class CreateGenreDto {
    @IsString()
    @ApiProperty({ type: String, description:'Name of the genre'})
    @IsNotEmpty()
     name:string;
    
}
