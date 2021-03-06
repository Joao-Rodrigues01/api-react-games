import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import GamesRepository from "../repositories/GamesRepository";

class PlatformController {
  async index(request: Request, response: Response) {
    try {
      const { platform } = request.query;
      
      const gamesRepository = getCustomRepository(GamesRepository);

      const searchedGames = await gamesRepository.find({
        where: { platform },
      });

      console.log(searchedGames);

      return response.json(searchedGames);
    } catch (err) {
      return response.json(err);
    }
  }
}

export default PlatformController;