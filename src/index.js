import express from "express";
import cors from "cors";
import "dotenv/config"
import controller from "./controller/controller.js"

const server = express();
server.use(express.json());
server.use(cors());
server.use(controller)

server.listen(process.env.PORT, () => console.log(`API online on port ${process.env.PORT}`));