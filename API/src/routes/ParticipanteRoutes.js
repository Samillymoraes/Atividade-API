import express from "express";
import ParticipanteController from "../controllers/participanteController.js"


const routes = express.Router();

routes.get("/participante", ParticipanteController.listarParticipante);
routes.get("/participante/:id", ParticipanteController.listarParticipantePorId);
routes.post("/participante", ParticipanteController.cadastarParticipante);
routes.put("/participante/:id", ParticipanteController.atualizarParticipante);
routes.delete("/participante/:id", ParticipanteController.excluirParticipante);

export default routes;