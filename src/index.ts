//Importar a biblioteca express 
import express from 'express';
import type { Request, Response } from 'express';

//Criar a Aplicação express
const app = express();

//Criar a rota get principal
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

//Iniciar o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});