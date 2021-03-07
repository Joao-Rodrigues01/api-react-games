import { v4 as uuid } from 'uuid';
import {
  Column,
  PrimaryColumn,
  Entity,
  CreateDateColumn
} from 'typeorm';

@Entity('games')
class Game {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  platform: string;

  @CreateDateColumn()
  created_at: Date;

  @Column('boolean', { default: false })
  is_installed: boolean;

  constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}

export default Game;