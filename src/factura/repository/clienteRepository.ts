import { Repository } from "typeorm";

import { Cliente } from "../model";
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

@EntityRepository(Cliente)
export class clienteRepository extends Repository<Cliente> {

}
