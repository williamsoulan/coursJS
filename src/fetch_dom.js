import { apiKey } from './env.js'

// 7
const blocMeteo = document.querySelector("#bloc_meteo");
const ville = document.querySelector("#city");
const charger = document.querySelector("#charger");

// 8
const box = document.createElement("div");
box.setAttribute("id", "box")

// 9
box.style.display = "flex";
box.style.flexDirection = "column";

// 10
blocMeteo.appendChild(box);

// 11
for (let i = 0; i < 3; i++) {
    const titre = document.createElement("h2");
    Object.assign(titre.style, { // 12
    width : "auto",
    height : "10vh",
    backgroundColor : "grey",
    textAlign : "center",
    alignContent : "center",
    paddingTop : "20px",
    paddingBottom : "20px",
    });
    titre.textContent = ""; // 13
    titre.setAttribute("id", "id_title" + (i+1)); // 14
    box.appendChild(titre); // 15
};

// 16
const getMeteoJson = async (city) => {
    return await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=` + apiKey)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response;
            }
        })
}

// 17
const titre1 = document.querySelector("#id_title1");
const titre2 = document.querySelector("#id_title2");
const titre3 = document.querySelector("#id_title3");
const image = document.createElement("img");

charger.addEventListener('click', () => {
    if (ville.value != "") {

        getMeteoJson(ville.value).then(data => {

            if (data.status == 404) {
                titre1.textContent = `La ville n'existe pas`;
                titre2.textContent = ``;
                titre3.textContent = ``;

            } else {
                titre1.textContent = `Ville : ${data.name}`;
                titre2.textContent = `Température : ${data.main.temp} °`;
                titre3.textContent = `Temps : ${data.weather[0].description}`;
                image.setAttribute("style", "width : 90px; height : 90px; alignSelf : start");
                image.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                box.appendChild(image);
            }
        });
    } else {
        titre1.textContent = `Remplir les champs obligatoires`;
        titre2.textContent = ``;
        titre3.textContent = ``;
    }
});

