import { Router } from 'express';
import GameController from './controllers/GameController';
import PlatformController from './controllers/PlatformController';

const router = Router();

const gameController = new GameController();
const platformController = new PlatformController();

router.post('/games', gameController.create);

router.get('/games/:id', gameController.show);

router.get('/games', gameController.index);

router.get('/platform/', platformController.index);


export default router;