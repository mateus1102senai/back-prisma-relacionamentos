import express from "express";
import { config } from "dotenv";
import cors from "cors";

import animeRouter from "./routes/animeRoutes.js";
import collectionRouter from "./routes/collectionsRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 3000;

// Inicializa o Express
const app = express();
app.use(cors()); // Parse de JSON


app.use("/animes", animeRouter); // Usar as rotas de animes
app.use("/colecoes", collectionRouter); // Usar as rotas de coleções

// Rota base para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "API de Coleção de Animes funcionando!" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
