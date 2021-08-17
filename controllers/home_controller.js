const weatherService  = require('../services/weather_service.js');

module.exports.homePage = async (req, resp) => {
    let data = await weatherService.getUserLocationWeatherData();
    resp.render('index.pug', {data: data});
}

module.exports.cityWeather = async (req, resp) => {
    resp.render('index.pug');
}

module.exports.searchCityData = async (req, resp) => {
    let data = await weatherService.getCityWeatherData(req.body.city, req.body.country);
    resp.json(data);
}