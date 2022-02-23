import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ClienteDto } from "../dto/ClienteDto";
import { PageDto } from "../dto/pageable/PageDto";
import { PageOptionsDto } from "../dto/pageable/PageOptionsDto";
import { ProductoDto } from "../dto/ProductoDto";
import { ProductoService } from "../services/ProductoService";



@ApiTags('producto')
@Controller('producto')
@UseInterceptors(ClassSerializerInterceptor)
export class productoController{
    
    constructor(private readonly serviceProducto:ProductoService){}

    @Post()
    createProduct(@Body() dto:ProductoDto){
        return this.serviceProducto.saveProduct(dto);
    }

    @Put(':id')
    editProduct(@Param('id') id:number,
            @Body() dto:ProductoDto){
        return this.serviceProducto.updateProduct(id,dto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id:number){
        return this.serviceProducto.deleteProduct(id);
    }

    @Get('/name')
    @HttpCode(HttpStatus.OK)
    async getProductName(@Query() pageOptionsDto: PageOptionsDto,@Query('nombre') nombre:string ): Promise<PageDto<ProductoDto>> {
    return this.serviceProducto.getProductName(pageOptionsDto,nombre);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getProductAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<ProductoDto>> {
    return this.serviceProducto.getProduct(pageOptionsDto);
    }




}