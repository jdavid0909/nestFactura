import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { Cliente } from "../model";


export class FacturaDto{

    @ApiProperty()
    @IsString()
    codigo:string;

    @ApiProperty()
    @IsObject()
    cliente: Cliente;
}