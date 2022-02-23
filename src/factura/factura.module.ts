import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from './controller/clienteController';
import { Cliente, Factura, FacturaDetalles, Producto } from './model';
import { ClienteImpl } from './services/implementation/ClienteImp';

@Module({
    imports:[
        TypeOrmModule.forFeature([Cliente,Factura,FacturaDetalles,Producto])
      ],
      controllers: [clienteController],
      providers: [ClienteImpl]
})
export class FacturaModule {}
