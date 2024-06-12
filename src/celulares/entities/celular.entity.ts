import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Color } from 'src/colores/entities/color.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('celulares')
export class Celular {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('varchar', { length: 100, nullable: false })
  marca: string;

  @Column('varchar', { length: 100, nullable: false })
  modelo: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToMany(() => Color, (color) => color.celulares)
  @JoinTable({
    name: 'celulares_colores',
    joinColumn: {
      name: 'celular_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'color_id',
      referencedColumnName: 'id',
    },
  })
  colores: Color[];

  @ManyToMany(() => Categoria, (categoria) => categoria.celulares)
  @JoinTable({
    name: 'celulares_categorias',
    joinColumn: {
      name: 'celular_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categoria_id',
      referencedColumnName: 'id',
    },
  })
  categorias: Categoria[];
}
