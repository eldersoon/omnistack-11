const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

/**
 *  Session
 */
routes.post('/sessions', SessionController.create);

/**
 *  Ongs routes
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

/**
 *  Incidents routes
 */
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;