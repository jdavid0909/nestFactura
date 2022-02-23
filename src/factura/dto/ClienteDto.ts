import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNumber, IsObject, IsString } from "class-validator";
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
    @IsObject()
    facturas: Factura[] = new Array();

}