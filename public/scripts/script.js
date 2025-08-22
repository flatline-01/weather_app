const date = document.getElementById('date');
let sunriseElem = document.getElementById('sunrise');
let sunsetElem = document.getElementById('sunset');
const sunriseTimestamp = sunriseElem.innerHTML;
const sunsetTimestamp = sunsetElem.innerHTML;

sunriseElem.innerHTML= convertToHoursAndMinutes(sunriseTimestamp);
sunsetElem.innerHTML = convertToHoursAndMinutes(sunsetTimestamp);


const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
                'October', 'November', 'December'];

function generateDateStr(){
    let dateNow = new Date();
    const weekDay = dateNow.getDay();
    const dayNum = dateNow.getDate();
    const month = dateNow.getMonth();

    return `${weekDays[weekDay]} ${dayNum} ${months[month]}`
}

function chandeBg(){
    let dateNow = new Date();

    if(dateNow.getHours() >= 21 || dateNow.getHours() <= 3){
        document.body.style.background = `url('../images/night.png') center center/cover no-repeat`;
    }
    else if(dateNow.getHours() >= 18 || dateNow.getHours() <= 20){
        document.body.style.background = `url('../images/night.png') center center/cover no-repeat`;
    }
}

chandeBg();

date.innerHTML = generateDateStr();

function convertToHoursAndMinutes(ms){
    let date = new Date(ms * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
}