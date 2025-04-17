import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/",CollectionController.getAllCollections);

// GET /api/personagem/:id - Obter um Personagem pelo ID
// personagemRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/personagem - Criar um novo Personagem
// personagemRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/personagem/:id - Atualizar um Personagem
// personagemRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/personagem/:id - Remover um Personagem
// personagemRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;