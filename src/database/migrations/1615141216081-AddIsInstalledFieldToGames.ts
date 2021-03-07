import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddIsInstalledFieldToGames1615141216081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'games',
            new TableColumn({
                name: 'is_installed',
                type: 'boolean',
                isNullable: true,
                default: 'false'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('games', 'is_installed');
    }

}
