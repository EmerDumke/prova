import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class movies1668858597322 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'imagem',
            type: 'varchar(1000)',
          },
          {
            name: 'titulo',
            type: 'varchar(200)',
          },
          {
            name: 'criado',
            type: 'timestamp',
          },
          {
            name: 'atualizado',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
