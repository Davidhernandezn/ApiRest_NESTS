import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaController } from './pelicula.controller';
import { ProductoEntity } from './pelicula.entity';

@Module({ 
imports: [TypeOrmModule.forFeature([ProductoEntity])],//IMPORT
providers: [PeliculaService],
controllers: [PeliculaController]
})
export class PeliculaModule {}
