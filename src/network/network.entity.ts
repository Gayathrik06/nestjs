// network-data.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Networks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  method: string;

  @Column()
  status: number;
  
  @Column()
  text:string;

  @Column()
  address:string;

 

}
