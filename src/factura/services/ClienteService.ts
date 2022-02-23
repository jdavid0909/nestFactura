import { Cliente } from "../model";

export interface ClienteService{

    getMany():Promise<Cliente[]>;
}