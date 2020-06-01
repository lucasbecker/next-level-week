import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    //JASON
    response.json([
        "Diego", 
        "Cleiton", 
        "Robson", 
        "Lucas"]);
});


app.listen(3333);