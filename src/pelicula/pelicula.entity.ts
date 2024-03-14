import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pelicula'})
//BD A GENERAR?
export class PeliculaEntity {
    
    @PrimaryGeneratedColumn()
    id:number;
    nombre:string;
    descripcion:string;
    genero:string;
}