import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export default class MoviesEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id?: number;

  @Column({ name: 'imagem', type: 'varchar' })
  image: string;

  @Column({ name: 'titulo', type: 'varchar' })
  title: string;

  @Column({
    name: 'criado',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado',
    type: 'timestamp',
  })
  updatedAt: Date;
}
