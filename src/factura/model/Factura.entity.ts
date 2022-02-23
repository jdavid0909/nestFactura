import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from ".";
import { FacturaDetalles } from ".";



@Entity('factura')
export class Factura {

    @PrimaryGeneratedColumn()
    @Exclude()
    id:number;

    @Column({type:"varchar",length:20})
    codigo:string;

    @CreateDateColumn({type:'timestamp'})
    @Exclude()
    fecha:Date;

    @ManyToOne(() => Cliente, cliente => cliente.facturas)
    @JoinColumn({name:'clienteId'})
    cliente: Cliente;

    @OneToMany(()=> FacturaDetalles, facturaDetalles => facturaDetalles.factura)
    detalleFacturas: FacturaDetalles[];
}