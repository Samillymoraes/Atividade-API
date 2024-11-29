import mongoose from "mongoose";

const ParticipantesSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome: {type:String, required:true},
    instituicao:{type:string},
    curso:{type:string},
},{versionKey:false})

const participante = mongoose.model("participante", ParticipantesSchema)
export default ParticipantesSchema;
