import participante from "../models/Participante.js"

class ParticipanteController {
    static async listarParticipante (req, res){
        try {
            const listarParticipante = await participante.find({})
            res.status(200).json(listarParticipante);
        }catch(error){
            res.status(500).json({message: `${error.message}- "Erro interno no servidor"`});
        }
    }

    static async listarParticipantePorId (req, res){
        try {
            const id = req.params.id
            const ParticipanteEncontrado = await participante.findById(id)
            res.status(200).json(ParticipanteEncontrado);
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na requisição do participante"`});
        }
    }

    static async cadastarParticipante (req, res){
        try {
            const novoParticipante = await participante.creat(req.body)
            res.status(200).json({message: "Participante cadastrado com sucesso", participante: novoParticipante});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha falha ao cadastrar participante"`});
        }
    }

    static async atualizarParticipante (req, res){
        try {
            const id = req.params.id
            await participante.findByIdAndUpdate(id,req.body)
            res.status(200).json({message: "Participante atualizado com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na atualização do participante"`});
        }
    }

    static async excluirParticipante (req, res){
        try {
            const id = req.params.id
            await participante.findByIdAndDelete(id)
            res.status(200).json({message: "Participante excluido com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na exclusão do participante"`});
        }
    }

}

export default ParticipanteController;