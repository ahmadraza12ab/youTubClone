const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs"
);
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "affabf6ff5msh9c60018747fbcb3p18c4e3jsn56a3e7715cf2"
);
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);
