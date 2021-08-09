import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Departments } from './departments.model';
import { Products } from './products.model';

@Table({ timestamps: false })
export class Categories extends Model<Categories> {
  @Column
  name: string;

  @ForeignKey(() => Departments)
  @AllowNull(false)
  @Column
  departmentId: number;

  @BelongsTo(() => Departments)
  department: Departments;

  @HasMany(() => Products)
  products: Products[];
}
