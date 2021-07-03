const routes = require('express').Router();

routes.get('/', (req, res) => res.send({ message: 'oi' }));

module.exports = routes;