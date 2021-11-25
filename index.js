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
  let url = music.url;
  console.log(music.url);
  let nameMusic = music.name;
  //   console.log(music.name);
}
