import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PageMetaDto, PageOptionsDto } from "src/common/dtos";
import { PageDto } from "../dto/pageable/PageDto";
import { ProductoDto } from "../dto/ProductoDto";
import { Producto } from "../model";
import { productoRepository } from "../repository/productoRepository";


@Injectable()
export class ProductoService{

    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository:productoRepository
    ){}

    async saveProduct(dto:ProductoDto){
        const post = this.productoRepository.create(dto as any);
         return await this.productoRepository.save(post);
    }

    async updateProduct(id:number,dto:ProductoDto){
        const update = await this.productoRepository.findOne(id);

        if(!update) throw new NotFoundException();

        const updateProduct = Object.assign(update,dto);
        return await this.productoRepository.save(updateProduct);
    }

    async deleteProduct(id:number){
        return await this.productoRepository.delete(id); 
    };

    public async getProductName(pageOptionsDto: PageOptionsDto,nombre:string ): Promise<PageDto<ProductoDto>> {
        const queryBuilder = this.productoRepository.createQueryBuilder('productos');
    
        queryBuilder
          .where("productos.nombre = :nombre", { nombre: nombre})
          .orderBy("productos.nombre", pageOptionsDto.order)
          .skip(pageOptionsDto.skip)
          .take(pageOptionsDto.take);
    
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
    
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    
        return new PageDto(entities, pageMetaDto);
    }

    public async getProduct(pageOptionsDto: PageOptionsDto): Promise<PageDto<ProductoDto>> {
        const queryBuilder = this.productoRepository.createQueryBuilder('productos');
    
        queryBuilder
          .orderBy("productos.nombre", pageOptionsDto.order)
          .skip(pageOptionsDto.skip)
          .take(pageOptionsDto.take);
    
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
    
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    
        return new PageDto(entities, pageMetaDto);
    }



}