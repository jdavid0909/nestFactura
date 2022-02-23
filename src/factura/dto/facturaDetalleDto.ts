import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsObject } from "class-validator";
import { Factura, Producto } from "../model";


export class facturaDetallesDto{

    @ApiProperty()
    @IsNumber()
    amount:number;

    @ApiProperty()
    @IsNumber()
    price:number;

    @ApiProperty()
    @IsNumber()
    totalParcial:number;

    @ApiProperty()
    @IsNumber()
    isc:number;

    @ApiProperty()
    @IsNumber()
    descuento:number;

    @ApiProperty()
    @IsNumber()
    total:number;

    @ApiProperty()
    @IsObject()
    factura: Factura;

    @ApiProperty()
    @IsObject()
    producto:Producto;
}