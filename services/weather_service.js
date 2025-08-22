require('dotenv').config();
const { response } = require('express');
const Weather = require('../models/weather');
const fetch = require('node-fetch');

async function getIp() {
    const ipfyUrl = "https://api.ipify.org/?format=json"
    let data = await fetch(ipfyUrl).then(response => response.json()); 
    return data['ip']
}

module.exports.getUserLocationWeatherData = async () => {
    let userIp = await getIp();
    let ipInfoUrl = `https://ipinfo.io/${userIp}?token=${process.env.GET_LOCATION_API_KEY}`;

    return await fetch(ipInfoUrl)
        .then(response => response.json())
        .then(ipData => {
            let ipDataCity = ipData.city;
            let ipDataCountry = ipData.country;
            return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${ipDataCity},${ipDataCountry}&key=${process.env.WEATHER_API_KEY}`);
        })
        .then(response => response.json())
        .then(data => {
            const rows = data['data'];
            return rows.map((row) => {
                return (new Weather(
                    data['city_name'], data['country_code'], row['weather']['description'],
                    row['weather']['icon'], row['high_temp'], row['low_temp'],
                    row['temp'], row['rh'], row['sunrise_ts'], row['sunset_ts'],
                    row['wind_spd'], row['datetime']));
            });
        })
        .catch(err => {
            console.error('Request failed', err)
        });
}

module.exports.getCityWeatherData = async (city, country) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${country}&key=${process.env.WEATHER_API_KEY}`;
    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data['data'];
            return rows.map((row) => {
                return (new Weather(
                    data['city_name'], data['country_code'], row['weather']['description'],
                    row['weather']['icon'], row['high_temp'], row['low_temp'],
                    row['temp'], row['rh'], row['sunrise_ts'], row['sunset_ts'],
                    row['wind_spd'], row['datetime']));
            });
        })
        .catch(err => {
            console.error('Request failed', err);
        });
}