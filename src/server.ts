import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

import { router } from './routes';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(router);

// 1. cria rota estática para as imagens
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

// 2. trata erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    // 2.1. se for uma instância de erro esperada pelo express
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    // 2.2. se for qualquer outro tipo de erro
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    })
    
})

app.listen(process.env.PORT, () => console.log("Servidor rodando..."))

