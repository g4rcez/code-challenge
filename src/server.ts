import express from "express";
import Countries from "./mocks/countries.json";
import { generateLog } from "./desafio-game-logs/server";

const app = express();

app.get("/countries", (req, res) => {
  return res.status(200).json(Countries);
});

app.get("/game/matches/:matches/heroes/:heroes", (req, res) => {
  const matches = Number(req.params.matches);
  const heroes = Number(req.params.heroes);
  const logs = generateLog({ matches, heroes });
  return res.json({ logs });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 :${PORT}`));
