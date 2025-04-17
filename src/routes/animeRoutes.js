import express from "express";
import AnimeController from "../controllers/animeController.js";

const animeRouter = express.Router();

// Rotas de Animes
// GET /api/animes - Listar todos os animes
animeRouter.get("/", AnimeController.getAllAnimes);

// GET /api/animes/:id - Obter um anime pelo ID
animeRouter.get("/:id", AnimeController.getAnimeById);

// POST /api/animes - Criar um novo anime
animeRouter.post("/", AnimeController.createAnime);

// PUT /api/animes/:id - Atualizar um anime
animeRouter.put("/:id", AnimeController.updateAnime);

// DELETE /api/animes/:id - Remover um anime
animeRouter.delete("/:id", AnimeController.deleteAnime);

export default animeRouter;
