import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1684919481933 implements MigrationInterface {
    name = 'Migrations1684919481933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rule" DROP CONSTRAINT "FK_d49f57934dd307cf06e9932b172"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD CONSTRAINT "FK_d49f57934dd307cf06e9932b172" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rule" DROP CONSTRAINT "FK_d49f57934dd307cf06e9932b172"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD CONSTRAINT "FK_d49f57934dd307cf06e9932b172" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
