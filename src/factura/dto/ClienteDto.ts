import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNumber, IsString } from "class-validator";
import { isString } from "util";
import { estado } from "../Enums/Enums";
import { Factura } from "../model";


export class ClienteDto{

    @IsString()
    @ApiProperty()
    nombre:string;

    @ApiProperty()
    @IsNumber()
    celular:number;

    @ApiProperty()
    @IsBoolean()
    status:boolean;

    @ApiProperty()
    facturas: Factura[] = new Array();

}