import { EntityRepository, Repository } from 'typeorm';
import Game from '../models/Game';

@EntityRepository(Game)
class GamesRepository extends Repository<Game> {}

export default GamesRepository;