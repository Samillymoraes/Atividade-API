import evento from "../models/Evento.js"

class EventoController {
    static async listarEvento (req, res){
        try {
            const listarEvento = await evento.find({})
            res.status(200).json(listarEvento);
        }catch(error){
            res.status(500).json({message: `${error.message}- "Erro interno no servidor"`});
        }
    }

    static async listarEventoPorId (req, res){
        try {
            const id = req.params.id
            const EventoEncontrado = await evento.findById(id)
            res.status(200).json(EventoEncontrado);
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na requisição do evento"`});
        }
    }

    static async cadastarEvento (req, res){
        try {
            const novoEvento = await evento.creat(req.body)
            res.status(200).json({message: "Evento cadastrado com sucesso", evento: novoEvento});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha falha ao cadastrar evento"`});
        }
    }

    static async atualizarEvento (req, res){
        try {
            const id = req.params.id
            await evento.findByIdAndUpdate(id,req.body)
            res.status(200).json({message: "Evento atualizado com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na atualização do Evento"`});
        }
    }

    static async excluirEvento (req, res){
        try {
            const id = req.params.id
            await evento.findByIdAndDelete(id)
            res.status(200).json({message: "Evento excluido com sucesso!"});
        }catch(error){
            res.status(500).json({message: `${error.message}- "Falha na exclusão do evento"`});
        }
    }

}

export default EventoController;