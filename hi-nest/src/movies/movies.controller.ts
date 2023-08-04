import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMoviveDto } from './dto/create-movie.dto';
import { UpdateMoviveDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId);
    }


    @Post()
    Create(@Body() movieData : CreateMoviveDto) {
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    path(@Param('id') movieId:number, @Body() updateData : UpdateMoviveDto){
        return this.moviesService.update(movieId, updateData)
    }



}
