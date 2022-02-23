import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from './controller/clienteController';
import { facturaController } from './controller/facturaController';
import { productoController } from './controller/productoController';
import { Cliente, Factura, FacturaDetalles, Producto } from './model';
import { facturaService } from './services/FacturaService';
import { ClienteImpl } from './services/implementation/ClienteImp';
import { ProductoService } from './services/ProductoService';

@Module({
    imports:[
        TypeOrmModule.forFeature([Cliente,Factura,FacturaDetalles,Producto])
      ],
      controllers: [clienteController,productoController,facturaController],
      providers: [ClienteImpl,ProductoService,facturaService]
})
export class FacturaModule {}
