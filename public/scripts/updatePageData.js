function updatePageData(data){
    document.getElementById('location').innerHTML = `${data[0].city}, ${data[0].country}`;
    document.getElementById('weather-icon').setAttribute('src', 
                            `https://www.weatherbit.io/static/img/icons/${data[0].icon}.png`);
    document.getElementById('temp').innerHTML = `${data[0].temp}°`;
    document.getElementById('weather-description').innerHTML = data[0].weather;
    document.getElementById('hight').innerHTML = data[0].hight;
    document.getElementById('low').innerHTML = data[0].low;
    document.getElementById('wind').innerHTML = `${data[0].wind} mph`;
    document.getElementById('humidity').innerHTML = `${data[0].humidity} %`;
    document.getElementById('sunrise').innerHTML = `${convertToHoursAndMinutes(data[0].sunrise)}`;
    document.getElementById('sunset').innerHTML = `${convertToHoursAndMinutes(data[0].sunset)}`;
    let cards = document.querySelector('.cards');
    cards.innerHTML = '';
    for(let i = 0; i < data.length; i++){
       let card =  `
       <div class='card'>
           <p>${data[i].day}</p>
           <img src='https://www.weatherbit.io/static/img/icons/${data[i].icon}.png' class='card__img'>
           <p>${data[i].temp}</p>
        </div>`;
       cards.innerHTML += card;
    }
}