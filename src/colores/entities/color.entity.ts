import { Celular } from 'src/celulares/entities/celular.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('colores')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 45, nullable: false })
  nombre: string;

  @ManyToMany(() => Celular, (celular) => celular.colores)
  celulares: Celular[];
}
