import express from "express";
import evento from "./EventoRoutes.js";
import participante from "./ParticipanteRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) =>
        res.status(200).send('Bem vindo ao node.js'));
    app.use(express.json(), evento);
    app.use(express.json(), participante);
}

export default routes;
