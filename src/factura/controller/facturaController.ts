import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FacturaDto } from "../dto/FacturaDto";
import { PageDto } from "../dto/pageable/PageDto";
import { PageOptionsDto } from "../dto/pageable/PageOptionsDto";
import { facturaService } from "../services/FacturaService";

@ApiTags('factura')
@Controller('factura')
@UseInterceptors(ClassSerializerInterceptor)
export class facturaController{

    constructor( private readonly serviceFactura:facturaService){}

    @Post()
    createOne(@Body() dto:FacturaDto ){
        return this.serviceFactura.saveFactura(dto);
    }

    @Get(':id')
    async getOne(@Param('id',ParseIntPipe) id: number){

        return await this.serviceFactura.getId(id)
    }

    
    
    @Get()
    @HttpCode(HttpStatus.OK)
    async getProductAll(@Query() pageOptionsDto: PageOptionsDto,@Query('fechaIncio')fechaInicio:string,@Query('fechaFin') fechaFin:string ): Promise<PageDto<FacturaDto>> {
    return this.serviceFactura.getFactura(pageOptionsDto,fechaInicio,fechaFin);
    }



}