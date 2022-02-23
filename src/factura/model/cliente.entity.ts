import { generateKey } from "crypto";
import {Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Factura} from ".";
import { estado } from "../Enums/Enums";

@Entity("clientes")
export class Cliente{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:50})
    nombre:string;

    @Column({type:'int'})
    celular:number;

    @Column({type:'boolean'})
    status:boolean;

    @CreateDateColumn({type:'timestamp'})
    fechaCreacion:Date;

    @OneToMany(() => Factura , factura => factura.cliente)
    facturas: Factura[];


}