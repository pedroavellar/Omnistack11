const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Listar todas as ongs
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    })
}), IncidentController.delete);

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