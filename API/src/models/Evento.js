import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    titulo: {type:String, required:true},
    descrição:{type:Text},
    dataDoevento:{type:Date},
    local:{type:string},
    listadeParticipantes:{type: mongoose.Schema.Types.ObjectId, ref:"Participantes"}
},{versionKey:false})

const evento = mongoose.model('evento', EventoSchema)
export default EventoSchema;
