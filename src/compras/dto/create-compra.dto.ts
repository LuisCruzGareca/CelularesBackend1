import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCompraDto {
  //campos a crear
  /*
    id celular
    direccion de envio

*/
  @IsNotEmpty({ message: 'El campo ID no debe ser vacío' })
  readonly idCelular: number;
  @IsNotEmpty({ message: 'El campo ID no debe ser vacío' })
  @IsString({ message: 'El campo ID debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo ID no debe ser mayor a 45 caracteres',
  })
  readonly direccionEnvio: string;
}
