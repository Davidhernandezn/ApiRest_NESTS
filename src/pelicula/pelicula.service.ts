import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeliculaEntity } from './pelicula.entity';
import { PeliculaRepository } from './pelicula.repository';
import { PeliculaDto } from './dto/pelicula.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class PeliculaService {

    constructor( @InjectRepository(PeliculaEntity)
    private peliculaRepository: PeliculaRepository)
    {}

    async getAll(): Promise<PeliculaEntity[]> {
        const list = await this.peliculaRepository.find();
        if (!list.length) {
            throw new NotFoundException({message :'la lista está vacía'});
        }
        return list;
    }


    async findById(id: number): Promise<PeliculaEntity | undefined> {
        const pelicula = await this.peliculaRepository.findOne({ where: { id } });
        if (!pelicula) {
            throw new NotFoundException({ message: 'no existe' });
        }
        return pelicula;
    }
    


    async create(dto: PeliculaDto): Promise<any> {
    const pelicula = this.peliculaRepository.create(dto);
        await this.peliculaRepository.save(pelicula);
       return new MessageDto(`pelicula ${pelicula.nombre} creada`);
    }

    async update(id: number, dto: PeliculaDto): Promise<any> {
        const pelicula = await this.findById(id);
        dto.nombre ? pelicula.nombre = dto.nombre : pelicula.nombre = pelicula.nombre;
        dto.descripcion ? pelicula.descripcion = dto.descripcion : pelicula.descripcion = pelicula.descripcion;
        dto.genero ? pelicula.genero = dto.genero : pelicula.genero = pelicula.genero;
        await this.peliculaRepository.save(pelicula);
        return {message: 'pelicula actualizada'}
        //return new MessageDto(`pelicula ${pelicula.nombre} actualizado`);
    }

    async delete(id: number): Promise<any> {
        const pelicula = await this.findById(id);
        await this.peliculaRepository.delete(pelicula);
        return {message: 'pelicula eliminada'}
        //return new MessageDto(`producto ${producto.nombre} eliminado`);
    }

}
