import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('madeira')
export class Madeiras {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cor: string;

  @Column()
  localidade: string
}
