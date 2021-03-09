import { Router } from 'express';
import GameController from './controllers/GameController';
import IsInstalledController from './controllers/IsInstalledController';
import PlatformController from './controllers/PlatformController';

const router = Router();

const gameController = new GameController();
const platformController = new PlatformController();
const isIntalledController = new IsInstalledController();

router.post('/games', gameController.create);

router.get('/games/name/', gameController.show);

router.get('/games', gameController.index);

router.get('/platform/', platformController.index);

router.patch('/games/', isIntalledController.update);


export default router;