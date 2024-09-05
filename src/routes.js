const express = require('express');
const controllerSms = require('./controllers/controllerSms');


const routes = express.Router();

routes.post('/send/sms/',controllerSms.sendSMS);

module.exports = routes;