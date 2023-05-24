import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1684830247998 implements MigrationInterface {
    name = 'Migrations1684830247998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rule" ("id" SERIAL NOT NULL, "start" integer NOT NULL, "end" integer NOT NULL, "day" character varying NOT NULL, "restaurantId" integer, CONSTRAINT "PK_a5577f464213af7ffbe866e3cb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "document" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rule" ADD CONSTRAINT "FK_d49f57934dd307cf06e9932b172" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rule" DROP CONSTRAINT "FK_d49f57934dd307cf06e9932b172"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "rule"`);
    }

}
