import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Celular } from './entities/celular.entity';
import { Repository } from 'typeorm';
import { CreateCelularDTO } from './dto/create-celular';
import { UpdateCelularDTO } from './dto/update-celular.dto';
import { Color } from 'src/colores/entities/color.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class CelularesService {
  constructor(
    @InjectRepository(Celular)
    private celularRepository: Repository<Celular>,
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async insertar(celularDTO: CreateCelularDTO) {
    const existe = await this.celularRepository.findOneBy({
      nombre: celularDTO.nombre,
    });

    if (existe) {
      throw new ConflictException(
        `El celular con el nombre ${celularDTO.nombre} ya existe`,
      );
    }

    const color = await this.colorRepository.findOneBy({
      id: celularDTO.color,
    });
    const categoria = await this.categoriaRepository.findOneBy({
      id: celularDTO.categoria,
    });

    return await this.celularRepository.save({
      nombre: celularDTO.nombre,
      descripcion: celularDTO.descripcion,
      marca: celularDTO.marca,
      modelo: celularDTO.modelo,
      precio: celularDTO.precio,
      color: color,
      categoria: categoria,
    });
  }

  async obtener(): Promise<Celular[]> {
    return await this.celularRepository.find();
  }
  async obtenrCelularID(idCelu: number) {
    return await this.celularRepository.findOneBy({
      id: idCelu,
    });
  }

  async actualizar(id: number, updateCelularDTO: UpdateCelularDTO) {
    const color = await this.colorRepository.findOneBy({
      id: updateCelularDTO.color,
    });
    const categoria = await this.categoriaRepository.findOneBy({
      id: updateCelularDTO.categoria,
    });

    return await this.celularRepository.update(id, {
      nombre: updateCelularDTO.nombre,
      descripcion: updateCelularDTO.descripcion,
      marca: updateCelularDTO.marca,
      modelo: updateCelularDTO.modelo,
      precio: updateCelularDTO.precio,
      color: color,
      categoria: categoria,
    });
  }
  async eliminar(id: number) {
    return await this.celularRepository.delete(id);
  }
}
