import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Celular } from 'src/celulares/entities/celular.entity';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
    @InjectRepository(Celular)
    private celularRepository: Repository<Celular>,
  ) {}

  async insert(usuario: Usuario, createCompraDto: CreateCompraDto) {
    //usando el celularRepository buscar el celular por su id y guardarlo en una variable
    const celular = await this.celularRepository.findOneBy({
      id: createCompraDto.idCelular,
    });

    //INSERTAR LA COMPRA
    await this.compraRepository.save({
      direccionEnvio: createCompraDto.direccionEnvio,
      total: celular.precio,
      usuario: usuario,
    });
  }
}
