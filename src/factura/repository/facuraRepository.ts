import { Repository } from "typeorm";
import { FacturaDto } from "../dto/FacturaDto";
import { Factura } from "../model";
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

@EntityRepository(Factura)
export class facturaRepository extends Repository<Factura>{

}