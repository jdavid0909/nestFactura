import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from './controller/clienteController';
import { productoController } from './controller/productoController';
import { Cliente, Factura, FacturaDetalles, Producto } from './model';
import { ClienteImpl } from './services/implementation/ClienteImp';
import { ProductoService } from './services/ProductoService';

@Module({
    imports:[
        TypeOrmModule.forFeature([Cliente,Factura,FacturaDetalles,Producto])
      ],
      controllers: [clienteController,productoController],
      providers: [ClienteImpl,ProductoService]
})
export class FacturaModule {}
