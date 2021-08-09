import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Categories } from './categories.model';
import { Sizes } from './sizes.model';

@Table
export class Products extends Model<Products> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  image: string;

  @Column
  storeName: string;

  @Column
  linkToProd: string;

  @ForeignKey(() => Categories)
  @AllowNull(false)
  @Column
  categoryId: number;

  @BelongsTo(() => Categories)
  category: Categories;

  @HasMany(() => Sizes)
  sizes: Sizes[];
}
