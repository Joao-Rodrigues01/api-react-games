import { Request, Response, Router } from 'express';

const router = Router();

router.get('/games', (request: Request, response: Response) => {
  return response.json({ok: true});
})

export default router;