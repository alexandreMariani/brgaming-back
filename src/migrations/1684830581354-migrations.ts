import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1684830581354 implements MigrationInterface {
    name = 'Migrations1684830581354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rule" DROP COLUMN "start"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD "start" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rule" DROP COLUMN "end"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD "end" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rule" DROP COLUMN "end"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD "end" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rule" DROP COLUMN "start"`);
        await queryRunner.query(`ALTER TABLE "rule" ADD "start" integer NOT NULL`);
    }

}
