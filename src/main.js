import './style.css'
import { apiKey } from './env.js'

// const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
//     .then((response) => {
//         return response
//     })
//     .then((data) => {
//         return data.json()
//     });

// console.log(meteo);


// Premiere methode
const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data) // console.log directement intégré a la fonction
    });



// Deuxième methode
const apiMeteo = async () => {
    return await fetch ('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
        .then(response => {
            return response.json();
        })
}

apiMeteo().then(json => { // console.log deuxieme methode
    console.log(json);
});

// Appel de la méthode (traitement)
apiFunction().then(json => {
    console.log(json.weather);
})