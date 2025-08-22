module.exports = class Weather{
    constructor (city, country, weather, icon, hight, low, temp, humidity, sunrise, sunset, wind, day) {
        /** @type {String} */  this.city = city
        /** @type {String} */  this.country = country
        /** @type {String} */  this.weather = weather
        /** @type {String} */  this.icon = icon
        /** @type {String}*/   this.hight = hight
        /** @type {String}*/   this.low = low
        /** @type {String}*/   this.temp = temp
        /** @type {String}*/   this.humidity = humidity
        /** @type {String}*/   this.sunrise = sunrise
        /** @type {String}*/   this.sunset = sunset
        /** @type {String}*/   this.wind = wind
        /** @type {String}*/   this.day = day
    }
}
