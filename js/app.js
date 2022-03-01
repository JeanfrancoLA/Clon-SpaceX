const Select = document.getElementById(`spacex`);
const cardsCapsulesContainer = document.getElementById(
  `cards-capsules-container`
);
const cardsDragonContainer = document.getElementById(`cards-dragon-container`);
const cardsCrewContainer = document.getElementById(`cards-crew-container`);
const cardsHistoryContainer = document.getElementById(
  `cards-history-container`
);
const searchCapsulas = document.getElementById(`searchCapsulas`);
const searchCrew = document.getElementById(`searchPeople`);
const searchHistory = document.getElementById(`searchHistory`);
const searchDragon = document.getElementById(`searchDragon`);

searchHistory.classList.add(`display--none`);
searchCrew.classList.add(`display--none`);
searchDragon.classList.add(`display--none`);
searchCapsulas.classList.add(`display--none`);

Select.addEventListener(`click`, (e) => {
  if (e.target.value == "capsules") {
    searchHistory.classList.add(`display--none`);
    searchCrew.classList.add(`display--none`);
    searchDragon.classList.add(`display--none`);
    searchCapsulas.classList.remove(`display--none`);
    cardsCapsulesContainer.innerHTML = "";
    cardsDragonContainer.innerHTML = "";
    cardsCrewContainer.innerHTML = "";
    cardsHistoryContainer.innerHTML = "";
    fetch("https://api.spacexdata.com/v4/capsules/")
      .then((response) => response.json())
      .then((data) => {
        searchCapsulas.addEventListener(`keyup`, (e) => {
          let historyInfo = [];
          for (let index = 0; index < data.length; index++) {
            historyInfo.push({
              id: data[index].id,
              serial: data[index].serial,
              status: data[index].status,
              type: data[index].type,
              last_update: data[index].last_update,
            });
          }
          const filter = historyInfo.filter((element) =>
            element.serial.toLocaleLowerCase().includes(`${e.target.value}`)
          );

          if (filter.length < 2) {
            for (let index = 0; index < filter.length; index++) {
              cardsCapsulesContainer.innerHTML = `<div class="card-capsules">
              <h3 class="card__capsules-title">${filter[index].serial}</h3>
              <p class="card__capsules-id">id : ${filter[index].id}</p>
              <p class="card__capsules-status">status :${filter[index].status}</p>
              <p class="card__capsules-type">type : ${filter[index].type}</p>
              <a href="${filter[index].last_update}" class="card__capsules-button-link">
              <button class="card__capsules-button">Leer mas</button>
            </a></div>`;
            }
          } else {
            for (let index = 0; index < filter.length; index++) {
              cardsCapsulesContainer.innerHTML += `<div class="card-capsules">
              <h3 class="card__capsules-title">${filter[index].serial}</h3>
              <p class="card__capsules-id">id :${filter[index].id}</p>
              <p class="card__capsules-status">status :${filter[index].status}</p>
              <p class="card__capsules-type">type :${filter[index].type}</p>
              <a href="${filter[index].last_update}" class="card__capsules-button-link">
              <button class="card__capsules-button">Leer mas</button>
            </a></div>`;
            }
          }
        });
        searchCapsulas.addEventListener(`keydown`, (e) => {
          cardsCapsulesContainer.innerHTML = "";
        });
      });
  } else if (e.target.value == "dragon") {
    searchHistory.classList.add(`display--none`);
    searchCrew.classList.add(`display--none`);
    searchDragon.classList.remove(`display--none`);
    searchCapsulas.classList.add(`display--none`);
    cardsCapsulesContainer.innerHTML = "";
    cardsDragonContainer.innerHTML = "";
    cardsCrewContainer.innerHTML = "";
    cardsHistoryContainer.innerHTML = "";
    fetch("https://api.spacexdata.com/v4/dragons")
      .then((response) => response.json())
      .then((data) => {
        searchDragon.addEventListener(`keyup`, (e) => {
          let dragonInfo = [];
          for (let index = 0; index < data.length; index++) {
            dragonInfo.push({
              name: data[index].name,
              description: data[index].description,
              image: data[index].flickr_images[2],
              id: data[index].id,
              type: data[index].type,
              wikipedia: data[index].wikipedia,
              first_flight: data[index].first_flight,
            });
          }
          const filter = dragonInfo.filter((element) =>
            element.name.toLocaleLowerCase().includes(`${e.target.value}`)
          );
          if (filter.length < 2) {
            for (let index = 0; index < filter.length; index++) {
              cardsDragonContainer.innerHTML = `<div class="card-dragon">
              <figure class="card__dragon-image-container">
              <img class="card__dragon-image" src="${filter[index].image}" alt="card-image">
            </figure>
              <h3 class="card__dragon-title">${filter[index].name}</h3>
              <p class="card__dragon-id">id : ${filter[index].id}</p>
              <p class="card__dragon-description">${filter[index].description}</p>
              <p class="card__dragon-type">type : ${filter[index].type}</p>
              <p class="card__dragon-first-flight">first flight : ${filter[index].first_flight}</p>
              <a href="${filter[index].wikipedia}" class="card__dragon-button-link">
              <button class="card__dragon-button">Leer mas</button>
            </a></div>`;
            }
          } else {
            for (let index = 0; index < filter.length; index++) {
              cardsDragonContainer.innerHTML += "";
              cardsDragonContainer.innerHTML += `<div class="card-dragon">
              <figure class="card__dragon-image-container">
              <img class="card__dragon-image" src="${filter[index].image}" alt="card-image">
            </figure>
              <h3 class="card__dragon-title">${filter[index].name}</h3>
              <p class="card__dragon-id">id : ${filter[index].id}</p>
              <p class="card__dragon-description">${filter[index].description}</p>
              <p class="card__dragon-type">type : ${filter[index].type}</p>
              <p class="card__dragon-first-flight">first flight : ${filter[index].first_flight}</p>
              <a href="${filter[index].wikipedia}" class="card__dragon-button-link">
              <button class="card__dragon-button">Leer mas</button>
            </a></div>`;
            }
          }
        });
        searchDragon.addEventListener(`keydown`, (e) => {
          cardsDragonContainer.innerHTML = "";
        });
      });
  } else if (e.target.value == "Crew") {
    searchHistory.classList.add(`display--none`);
    searchCrew.classList.remove(`display--none`);
    searchDragon.classList.add(`display--none`);
    searchCapsulas.classList.add(`display--none`);
    cardsCapsulesContainer.innerHTML = "";
    cardsDragonContainer.innerHTML = "";
    cardsCrewContainer.innerHTML = "";
    cardsHistoryContainer.innerHTML = "";
    fetch("https://api.spacexdata.com/v4/crew")
      .then((response) => response.json())
      .then(
        (data) =>
          searchCrew.addEventListener(`keyup`, (e) => {
            let crewInfo = [];
            for (let index = 0; index < data.length; index++) {
              crewInfo.push({
                name: data[index].name,
                agency: data[index].agency,
                wikipedia: data[index].wikipedia,
                status: data[index].status,
                id: data[index].id,
              });
            }
            const filter = crewInfo.filter((element) =>
              element.name.toLocaleLowerCase().includes(`${e.target.value}`)
            );
            if (filter < 2) {
              for (let index = 0; index < filter.length; index++) {
                cardsCrewContainer.innerHTML = `<div class="card-crew">
              <figure class="card__crew-image-container">
              <img class="card__crew-image" src="./crew/${filter[index].name}.jfif" alt="card-image">
            </figure>
              <h3 class="card__crew-title">${filter[index].name}</h3>
              <p class="card__crew-id">id : ${filter[index].id}</p>
              <p class="card__crew-agency">agenncy : ${filter[index].agency}</p>
              <p class="card__crew-status">status : ${filter[index].status}</p>
              <a href="${filter[index].wikipedia}" class="card__crew-button-link">
              <button class="card__crew-button">Leer mas</button>
            </a></div>`;
              }
            } else {
              for (let index = 0; index < filter.length; index++) {
                cardsCrewContainer.innerHTML += "";
                cardsCrewContainer.innerHTML += `<div class="card-crew">
                <figure class="card__crew-image-container">
                <img class="card__crew-image" src="./crew/${filter[index].name}.jfif" alt="card-image">
              </figure>
                <h3 class="card__crew-title">${filter[index].name}</h3>
                <p class="card__crew-id">id : ${filter[index].id}</p>
                <p class="card__crew-agency">agency : ${filter[index].agency}</p>
                <p class="card__crew-status">status : ${filter[index].status}</p>
                <a href="${filter[index].wikipedia}" class="card__crew-button-link">
                <button class="card__crew-button">Leer mas</button>
              </a></div>`;
              }
            }
          }),
        searchCrew.addEventListener(`keydown`, (e) => {
          cardsCrewContainer.innerHTML = "";
        })
      );
  } else if (e.target.value == "History") {
    searchHistory.classList.remove(`display--none`);
    searchCrew.classList.add(`display--none`);
    searchDragon.classList.add(`display--none`);
    searchCapsulas.classList.add(`display--none`);
    cardsCapsulesContainer.innerHTML = "";
    cardsDragonContainer.innerHTML = "";
    cardsCrewContainer.innerHTML = "";
    cardsHistoryContainer.innerHTML = "";
    fetch("https://api.spacexdata.com/v4/history")
      .then((response) => response.json())
      .then(
        (data) =>
          searchHistory.addEventListener(`keyup`, (e) => {
            let historyInfo = [];
            for (let index = 0; index < data.length; index++) {
              historyInfo.push({
                title: data[index].title,
                event_data: data[index].event_date_utc,
                event_unix: data[index].event_date_unix,
                details: data[index].details,
                link: data[index].links.article,
              });
            }
            const filter = historyInfo.filter((elemet) =>
              elemet.title.toLocaleLowerCase().includes(`${e.target.value}`)
            );

            if (filter.length < 2) {
              for (let index = 0; index < filter.length; index++) {
                cardsHistoryContainer.innerHTML = `<div class="card-history">
              <h3 class="card__history-title">${filter[index].title}</h3>
              <p class="card__history-event-data">event data : ${filter[index].event_data}</p>
              <p class="card__history-event-unix">event unix : ${filter[index].event_unix}</p>
              <p class="card__history-details">${filter[index].details}</p>
              <a href="${filter[index].link}" class="card__history-button-link">
              <button class="card__history-button">Leer mas</button></div>`;
              }
            } else {
              for (let index = 0; index < filter.length; index++) {
                cardsHistoryContainer.innerHTML += "";
                cardsHistoryContainer.innerHTML += `<div class="card-history">
              <h3 class="card__history-title">${filter[index].title}</h3>
              <p class="card__history-event-data">event data :${filter[index].event_data}</p>
              <p class="card__history-event-unix">event unix :${filter[index].event_unix}</p>
              <p class="card__history-details">${filter[index].details}</p>
              <a href="${filter[index].link}" class="card__history-button-link">
              <button class="card__history-button">Leer mas</button></div>`;
              }
            }
          }),
        searchHistory.addEventListener(`keydown`, (e) => {
          cardsHistoryContainer.innerHTML = "";
        })
      );
  } else if (e.target.value == "--") {
    searchHistory.classList.add(`display--none`);
    searchCrew.classList.add(`display--none`);
    searchDragon.classList.add(`display--none`);
    searchCapsulas.classList.add(`display--none`);
  }
});
