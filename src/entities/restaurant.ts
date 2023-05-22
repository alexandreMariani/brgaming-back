import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Rule } from "./rule";

@Entity()
@Unique(["name"])
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  type: string;

  @OneToMany(() => Rule, (rule) => rule.restaurant, { eager: true })
  rule: Rule[];

  constructor(name: string, document: string, type: string) {
    this.name = name;
    this.document = document;
    this.type = type;
  }
}
