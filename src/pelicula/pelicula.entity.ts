import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'informacion_general' }) // Reemplaza 'nombre_tabla_existente' con el nombre de tu tabla existente
export class PeliculaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  genero: string;
}
