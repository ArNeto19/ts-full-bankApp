import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());
  server.use(routes);

  server.listen(8080, () => console.log("Server running smoothly"));
});
