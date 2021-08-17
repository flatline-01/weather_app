const Weather = require('../models/Weather_model');
const fetch = require('node-fetch');

const ipInfoUrl = `https://ipinfo.io/212.112.126.184?token=${process.env.LOCATION_API_KEY}`;

module.exports.getUserLocationWeatherData = async () => {
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
        });
}
