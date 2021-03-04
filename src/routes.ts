import { Router } from 'express';
import GameController from './controllers/GameController';

const router = Router();

const gameController = new GameController();

router.post('/games', gameController.create);

router.get('/games/:id', gameController.show);

router.get('/games', gameController.index);

export default router;