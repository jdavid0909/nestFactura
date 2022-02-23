import { Repository } from "typeorm";
import { Producto } from "../model";
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

@EntityRepository(Producto)
export class productoRepository extends Repository<Producto>{
    
}