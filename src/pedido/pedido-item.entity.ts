import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PedidoEntity } from './pedido.entity';

@Entity({ name: 'pedido_itens' })
export class PedidoItemEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({
    name: 'quantidade',
    nullable: false,
  })
  quantidade: number;

  @Column({
    name: 'preco_venda',
    nullable: false,
  })
  precoVenda: number;

  @ManyToOne(() => PedidoEntity, (pedido) => pedido.pedidoItens, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  pedido: PedidoEntity;
}
