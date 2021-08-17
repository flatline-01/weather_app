const form =  document.forms['search-form'];
const input = form.elements['search-field'];

form.onsubmit = async (e) => {
    e.preventDefault();
    const arr = input.value.split(',');
    const data = JSON.stringify({city: arr[0], country: arr[1]});
    changeHtml(await getCityWeather(data));
}

async function getCityWeather(data){
    const response = await fetch('/weather', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await response.json();
}

