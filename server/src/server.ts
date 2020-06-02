import express, { request, response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

// Rota:    Endereço completo da requisição (localhost:3333/users)
// Recurso: Qual entidade estamos acessando (/users)

// Requisições
// GET: Buscar uma ou mais informações do backend
// POST: Criar uma nova informação no backend
// PUT: Atualizar uma informação existente no backend
// DELETE: Remover uma informação do backend

// Parametros
// Request Param: Parametros quem vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtro, paginação e outros
// Request Boby: Parametros para criação e atualização de informações

// SQL
//  SELECT * FROM users WHERE name = 'Diego'
// KNEX.JS
// knex('users').where('name','Diego').select('*');

/*const users = [
    "Diego", 
    "Cleiton", 
    "Robson", 
    "Lucas"
];

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : search;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});*/

app.listen(3333);