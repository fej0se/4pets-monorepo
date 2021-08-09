import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Products } from './products.model';

@Table
export class Sizes extends Model<Sizes> {
  @Column
  size: string;

  @ForeignKey(() => Products)
  @Column
  prodId: number;

  @BelongsTo(() => Products, { onDelete: 'SET NULL' })
  products: Products;
}
