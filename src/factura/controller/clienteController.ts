import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { query } from "express";
import { ClienteDto } from "../dto/ClienteDto";
import { PageDto } from "../dto/pageable/PageDto";
import { PageOptionsDto } from "../dto/pageable/PageOptionsDto";
import { ClienteService } from "../services/ClienteService";
import { ClienteImpl } from "../services/implementation/ClienteImp";

@ApiTags('clientes')
@Controller('cliente')
@UseInterceptors(ClassSerializerInterceptor)
export class clienteController{

    constructor(private readonly clienteService:ClienteImpl){}

    @Get()
    async getMany(){
        const data = await this.clienteService.getMany();
        return {
            mesagge:"Peticion Correcta",
            data:data
       }

    }

    @Get('/name')
    @HttpCode(HttpStatus.OK)
    async getUsers(@Query() pageOptionsDto: PageOptionsDto,@Query('nombre') nombre:string ): Promise<PageDto<ClienteDto>> {
    return this.clienteService.getUsers(pageOptionsDto,nombre);
    }

    @Post()
    createOne(@Body() dto:ClienteDto ){
        return this.clienteService.createOne(dto);
    }

    @Put(':id')
    editOne(@Param('id') id:number,
            @Body() dto:ClienteDto){
        return this.clienteService.EditOne(id,dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id:number){
        return this.clienteService.deleteOne(id);
    }

    @Get(':id')
    async getId(@Param('id',ParseIntPipe) id: number){

        return await this.clienteService.getId(id)
    }

}
