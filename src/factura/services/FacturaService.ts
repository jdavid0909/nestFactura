import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FacturaDto } from "../dto/FacturaDto";
import { PageDto } from "../dto/pageable/PageDto";
import { PageMetaDto } from "../dto/pageable/PageMetaDto";
import { PageOptionsDto } from "../dto/pageable/PageOptionsDto";
import { Factura } from "../model";
import { facturaRepository } from "../repository/facuraRepository";


@Injectable()
export class facturaService {

    constructor(
        @InjectRepository(Factura)
        private readonly repositoryFactura:facturaRepository){}

    async saveFactura(dto:FacturaDto){
         const post = this.repositoryFactura.create(dto as any);
         return await this.repositoryFactura.save(post);
    }    

    async getId(id:number){
        
        const queryBuilder =  this.repositoryFactura.createQueryBuilder('factura')
                                        .innerJoinAndSelect("factura.detalleFacturas","detalle")
                                        .innerJoinAndSelect("detalle.producto","producto")
                                        .where("factura.id = :ident", { ident: id })
                                        .getMany();

        return await queryBuilder;
    };

    async getFactura(pageOptionsDto: PageOptionsDto,fechaInicio:string,fechaFin:string): Promise<PageDto<FacturaDto>> {
        const queryBuilder = this.repositoryFactura.createQueryBuilder('factura');
    
        queryBuilder
          .andWhere('factura.fecha >= :inicio',{inicio:fechaInicio})
          .andWhere('factura.fecha <= :fin',{fin:fechaFin})
          .orderBy("factura.codigo", pageOptionsDto.order)
          .skip(pageOptionsDto.skip)
          .take(pageOptionsDto.take);
    
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
    
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    
        return new PageDto(entities, pageMetaDto);
    }

}