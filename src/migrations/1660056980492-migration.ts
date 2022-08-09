import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1660056980492 implements MigrationInterface {
    name = 'migration1660056980492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}
