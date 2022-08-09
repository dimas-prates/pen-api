import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1660063022102 implements MigrationInterface {
    name = 'migration1660063022102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "titlte" TO "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "title" TO "titlte"`);
    }

}
