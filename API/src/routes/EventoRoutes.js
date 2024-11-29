import express from "express";
import EventoController from "../controllers/eventoController.js"


const routes = express.Router();

routes.get("/evento", EventoController.listarEvento);
routes.get("/evento/:id", EventoController.listarEventoPorId);
routes.post("/evento", EventoController.cadastarEvento);
routes.put("/evento/:id", EventoController.atualizarEvento);
routes.delete("/evento/:id", EventoController.excluirEvento);

export default routes;