import { Request, Response } from "express";

class GameController {
  async create(request: Request, response: Response) {
    const { name, image_url, platform  } = request.body;
  }
};