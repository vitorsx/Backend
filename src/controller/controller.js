import { Router } from "express";
import { inserirAnime, verAnime } from "../repository/repository.js";

const server = Router();

server.post("/anime", async (req, resp) => {
    try {
        const anime = req.body
        const resposta = await inserirAnime(anime);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get("/ver", async (req, resp) => {
    try {
        const resposta = await verAnime();
        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default server;