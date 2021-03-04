import { Request, Response } from "express";

class GameController {
  async create(request: Request, response: Response) {
    const { name, image,  } = request.body;
  }

  async show() {}

  async index() {}
};