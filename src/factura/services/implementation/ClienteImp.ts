import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";
import { ClienteDto } from "src/factura/dto/ClienteDto";
import { Cliente } from "src/factura/model";
import { clienteRepository } from "src/factura/repository/clienteRepository";
import { Repository } from "typeorm";
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/common/dtos';


@Injectable()
export class ClienteImpl{

    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository:Repository<Cliente>,
        @InjectRepository(Cliente)
        private readonly _clienteRepository:clienteRepository
    ){}

    async getMany():Promise<Cliente[]>{
        return await this.clienteRepository.find();
    }



    async createOne(dto:ClienteDto){
        const post = this.clienteRepository.create(dto as any)
         return await this.clienteRepository.save(post);
    }

    async EditOne(id:number, dto: ClienteDto){
        const post = await this.clienteRepository.findOne(id);
        if(!post) throw new NotFoundException();
 
        const editCliente = Object.assign(post,dto);
 
        return await this.clienteRepository.save(editCliente);
     };
     
     async deleteOne(id:number){
        return await this.clienteRepository.delete(id); 
    };

    public async getUsers(pageOptionsDto: PageOptionsDto,nombre:string ): Promise<PageDto<ClienteDto>> {
        const queryBuilder = this._clienteRepository.createQueryBuilder('cliente');
    
        queryBuilder
          .where("cliente.nombre = :nombre", { nombre: nombre})
          .orderBy("cliente.nombre", pageOptionsDto.order)
          .skip(pageOptionsDto.skip)
          .take(pageOptionsDto.take);
    
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
    
        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    
        return new PageDto(entities, pageMetaDto);
    }

    async getId(id:number){
        
        const queryBuilder =  this.clienteRepository.createQueryBuilder('cliente')
                                        .innerJoinAndSelect("cliente.facturas","f")
                                        .where("cliente.id = :ident", { ident: id })
                                        .getMany();

        return await queryBuilder;
    };



    async paginate(options: IPaginationOptions): Promise<Pagination<Cliente>> {
        return paginate<Cliente>(this.clienteRepository, options);
      }


}