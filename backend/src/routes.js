const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Listar todas as ongs
routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


// Rota / Recurso

/*
GET
POST
PUT
DELETE
*/

/*
Tipos de parâmetros:
Query Params: parâmetros nomeados enviados na rota após o ?
    (Filtros, paginação)
    [request.query]
Route Params: parâmetros utilizados para identificar recursos
    [request.params]
Request Body: corpo da requisição, criar ou alterar recursos
    [request.body]
*/

/**
 * SQL
 * NoSQL
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * knexjs.org
 * npm install knex
 * npm install sqlite3
 * npx knex init
 * 
 * npx knex migrate:make create_ongs
 * npx knex migrate:latest
 * 
 * npm install cors
 */