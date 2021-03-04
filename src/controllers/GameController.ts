import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import GamesRepository from '../repositories/GamesRepository';



class GameController {
  async create(request: Request, response: Response) {
    
    try {
      const { name, image_url, platform  } = request.body;
      
      const gamesRepository = getCustomRepository(GamesRepository);

      const game = gamesRepository.create({
        name,
        image_url,
        platform
      });

      const gameExists = await gamesRepository.findOne({
        where: { name }
      });


      if (gameExists) {
        return response.json({error: "The game already exists."});
      }

      await gamesRepository.save(game);

      return response.status(201).json(game);
    } catch (err) {
      return response.json(err);
    }
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const gamesRepository = getCustomRepository(GamesRepository);

      const game = await gamesRepository.findOne(id);

      if (!game) {
        return response.json({error: "Game not found."});
      }

      return response.json(game);
    } catch (err) {
      return response.json(err);
    }
  }

  async index(request: Request, response: Response) {
    try {
      const gamesRepository = getCustomRepository(GamesRepository);
      
      const games = await gamesRepository.find();

      return response.json(games);
    } catch (err) {
      return response.json(err);
    }
  }
}

export default GameController;