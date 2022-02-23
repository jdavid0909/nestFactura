import { IsString } from "class-validator";
import { Cliente } from "../model";


export class FacturaDto{

    @IsString()
    codigo:string;

    cliente: Cliente;
}