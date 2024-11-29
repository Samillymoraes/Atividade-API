import express from 'express';
import conectaDataBase from './config/db.Connect.js';
import routes from './routers/index.js';

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.log("erro de conexão",erro);
});

conexao.once("open", () =>{
    console.log("Conexão feita com sucesso");
})


const app = express();
routes(app);


export default app;