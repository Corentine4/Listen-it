let allMusicArr = [];
let tableauFin = [];
const musicList = document.querySelector(".music-list");

function fetchMusic() {
  fetch("https://polar-earth-15538.herokuapp.com/Music")
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
  objMusicFull.realeaseDate = music.realeaseDate;
  //   console.log(music.author);

  allMusicArr.push(objMusicFull);
  if (allMusicArr.length == 6) {
    console.log(allMusicArr);
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
    console.log(arr[i]);
    const carte = document.createElement("li");
    const txtCarteNom = document.createElement("h5");
    txtCarteNom.innerText = arr[i].name;
    txtCarteNom.classList.add("nom");

    const txtCarteAuteur = document.createElement("h5");
    txtCarteAuteur.innerText = arr[i].author;
    txtCarteAuteur.classList.add("author");

    const txtCarterealeaseDate = document.createElement("p");
    txtCarterealeaseDate.innerText = arr[i].realeaseDate;
    txtCarterealeaseDate.classList.add("realeaseDate");

    const txtCarteStyle = document.createElement("p");
    txtCarteStyle.innerText = arr[i].style;
    txtCarteStyle.classList.add("style");

    const youtube = document.createElement("a");
    youtube.href = arr[i].youtube;
    youtube.innerHTML = "Voir sur youtube";
    youtube.classList.add("youtube");

    // const idCarte = document.createElement("p");
    // idCarte.innerText = `id: ${arr[i].id}`;
    const imgCarte = document.createElement("img");
    imgCarte.src = arr[i].pic;
    imgCarte.classList.add("imgCarte");

    // ajoute enfants à li
    carte.appendChild(imgCarte);
    carte.appendChild(txtCarteNom);
    carte.appendChild(txtCarteAuteur);
    // carte.appendChild(idCarte);
    carte.appendChild(txtCarterealeaseDate);
    carte.appendChild(youtube);
    carte.appendChild(txtCarteStyle);

    //Ajout de carte dans ul.listePoke
    musicList.appendChild(carte);
  }
}
