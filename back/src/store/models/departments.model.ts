import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Categories } from './categories.model';
import { Products } from './products.model';

@Table({ timestamps: false })
export class Departments extends Model<Departments> {
  @Column
  name: string;

  @HasMany(() => Categories)
  categories: Categories[];
}
