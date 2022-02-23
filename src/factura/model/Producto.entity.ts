import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FacturaDetalles } from ".";

@Entity('productos')
export class Producto{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:50})
    nombre:string;

    @Column({type:'int'})
    stock:number;

    @Column({type:'boolean'})
    estato:boolean;

    @CreateDateColumn({type:'timestamp'})
    fecha:Date;

    @OneToMany(()=> FacturaDetalles, facturasDetalles => facturasDetalles.producto)
    facturaDetalles:FacturaDetalles[];
}