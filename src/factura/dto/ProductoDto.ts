import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { FacturaDetalles } from "../model";


export class ProductoDto{
    
    @IsString()
    @ApiProperty()
    nombre:string;
    
    @ApiProperty()
    @IsNumber()
    stock:number;

    @ApiProperty()
    @IsBoolean()
    estato:boolean;

    @ApiProperty()
    facturaDetalles:FacturaDetalles[];
}