const express = require('express');
const router = express.Router();

const homeController = require('./controllers/home_controller')

router.get('/', (req, resp) => homeController.homePage(req, resp));

router.get('/weather', (req, resp) => homeController.cityWeather(req, resp));
router.post('/weather', (req, resp) => homeController.searchCityData(req, resp));

module.exports = router;