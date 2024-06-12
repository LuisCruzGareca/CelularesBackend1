import { Celular } from 'src/celulares/entities/celular.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('text')
  descripcion: string;

  @ManyToMany(() => Celular, (celular) => celular.categorias)
  celulares: Celular[];
}
