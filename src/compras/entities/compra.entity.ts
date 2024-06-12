import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { name: 'direccion_envio' })
  direccionEnvio: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  total: number;

  @CreateDateColumn({ name: 'fecha_venta' })
  fechaVenta: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;
}
