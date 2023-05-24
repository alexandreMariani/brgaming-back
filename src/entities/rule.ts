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

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.rule, {
    onDelete: "CASCADE",
  })
  restaurant: Restaurant;

  constructor(start: string, end: string, day: string) {
    this.start = start;
    this.end = end;
    this.day = day;
  }
}
