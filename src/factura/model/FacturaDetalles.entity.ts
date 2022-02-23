import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Factura } from ".";
import { Producto } from ".";


@Entity('facturaDetalle')
export class FacturaDetalles{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'int'})
    amount:number;

    @Column({type:'double'})
    price:number;

    @Column({type:'double'})
    totalParcial:number;

    @Column({type:'double'})
    isc:number;

    @Column({type:'double'})
    descuento:number;

    @Column({type:'double'})
    total:number;

    @Column({type:'varchar'})
    estado:string;
    @CreateDateColumn({type:'timestamp'})
    fecha:Date;

    @ManyToOne(() => Factura, Factura => Factura.detalleFacturas )
    factura: Factura;

    @ManyToOne(()=>Producto, producto=> producto.facturaDetalles)
    producto:Producto;
}