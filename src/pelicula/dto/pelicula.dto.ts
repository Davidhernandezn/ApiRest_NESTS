//import { IsNotEmpty, IsString } from "class-validator";
import { Max, MaxLength, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/notblank.decorator";

export class PeliculaDto {
    id?:number;
    
    @IsNotBlank({message: 'El nombre no puede estar vacio'})
    @MaxLength(12, {message: 'El nombre no puede ser mayor a 12 caracteres'})
    nombre?: string;

    @IsNotBlank({message: 'La descripcion no puede estar vacia'})
    @MaxLength(20, {message: 'La descripcion no puede ser mayor a 20 caracteres'})
    descripcion?:string;

    @IsNotBlank({message: 'El genero no puede estar vacio'})
    @MaxLength(12, {message: 'El genero no puede ser mayor a 12 caracteres'})
    genero?:string;
}