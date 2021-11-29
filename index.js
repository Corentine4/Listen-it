const fs = require("fs");
require("dotenv").config();
const apiKey = process.env.API_LINK;

let allMusicArr = [];
let tableauFin = [];

const musicList = document.querySelector(".music-list");

function fetchMusic() {
  fetch(apiKey)
    .then((response) => response.json())
    .then((allMusics) => {
      allMusics.forEach((music) => {
        fetchMusicComplet(music);
      });
    });
}
fetchMusic();

function fetchMusicComplet(music) {
  let objMusicFull = {};
  //   let url = music.url;
  //   console.log(music.url);
  //   let nameMusic = music.name;
  //   console.log(music.name);

  objMusicFull.id = music.id;
  objMusicFull.name = music.name;
  objMusicFull.pic = music.thumbnail;
  objMusicFull.author = music.author;
  objMusicFull.youtube = music.youtube;
  objMusicFull.style = music.style;
  objMusicFull.releaseDate = music.releaseDate;
  //   console.log(music.author);

  allMusicArr.push(objMusicFull);
  if (allMusicArr.length == 6) {
    // console.log(allMusicArr);
    tableauFin = allMusicArr.sort((a, b) => {
      return a.id - b.id;
    });
    // .slice(0, 6);
    // console.log(tableauFin);
    createCard(tableauFin);
  }
}
//Ajout du pokedex
function createCard(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    const carte = document.createElement("li");
    const txtCarteName = document.createElement("h5");
    txtCarteName.innerText = arr[i].name;
    txtCarteName.classList.add("name");

    const txtCarteAuthor = document.createElement("h5");
    txtCarteAuthor.innerText = arr[i].author;
    txtCarteAuthor.classList.add("author");

    const txtCarteReleaseDate = document.createElement("p");
    txtCarteReleaseDate.innerText = arr[i].releaseDate;
    txtCarteReleaseDate.classList.add("releaseDate");

    const txtCarteStyle = document.createElement("p");
    txtCarteStyle.innerText = arr[i].style;
    txtCarteStyle.classList.add("style");

    const youtube = document.createElement("a");
    youtube.href = arr[i].youtube;
    youtube.innerHTML = "Voir sur youtube";
    youtube.classList.add("youtube");

    // const idCarte = document.createElement("p");
    // idCarte.innerText = `id: ${arr[i].id}`;
    const thumbnail = document.createElement("img");
    thumbnail.src = arr[i].pic;
    thumbnail.classList.add("thumbnail");

    // ajoute enfants à li
    carte.appendChild(thumbnail);
    carte.appendChild(txtCarteName);
    carte.appendChild(txtCarteAuthor);
    // carte.appendChild(idCarte);
    carte.appendChild(txtCarteReleaseDate);
    carte.appendChild(youtube);
    carte.appendChild(txtCarteStyle);

    //Ajout de carte dans ul.listePoke
    musicList.appendChild(carte);
  }
}
