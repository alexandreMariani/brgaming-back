import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "./restaurant";

@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  day: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.rule)
  restaurant: Restaurant;

  //   constructor(name: string, document: string, type: string) {
  //     this.name = name;
  //     this.document = document;
  //     this.type = type;
  //   }
}
