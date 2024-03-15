import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaDto } from './dto/pelicula.dto';

@Controller('pelicula')
export class PeliculaController {
    constructor(private readonly peliculaService : PeliculaService){}

    @Get()
    async getAll() {
        return await this.peliculaService.getAll();
    }

    @UsePipes(new ValidationPipe({whitelist: true})) //IGNORAR CAMPOS QUE NO PERTENEZCAN EL DTO
    @Post()
    async create(@Body() dto: PeliculaDto) {
        return await this.peliculaService.create(dto);
    }
    
    //@UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    //async update(@Param('id', ParseIntPipe) id: number, @Body() dto: PeliculaDto) {
    async update(@Param('id') id: number, @Body() dto: PeliculaDto) {
    return await this.peliculaService.update(id, dto);
    }

    @Delete(':id')
    //async delete(@Param('id', ParseIntPipe) id: number){
    async delete(@Param('id') id: number){
        return await this.peliculaService.delete(id)
    }
}
