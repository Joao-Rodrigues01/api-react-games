import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import GamesRepository from "../repositories/GamesRepository";

class IsInstalledController {
  async update(request: Request, response: Response) {
    try {
      const { name } = request.query;

      const gamesRepository = getCustomRepository(GamesRepository);;

      const game = await gamesRepository.findOne({
        where: { name },
      });

      if (!game) {
        return response.json({error: "Game not found."});
      }

      const gameUpdated = {
        ...game,
        is_installed: true,
      }

      await gamesRepository.save(gameUpdated);

      return response.json(gameUpdated);
    } catch (err) {
      return response.json({error: err});
    }
  }
}


export default IsInstalledController;