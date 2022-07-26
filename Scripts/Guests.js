const artist = [
  {
    name: "Abida Parveen",
    sub: "Sufi and Indus Folk Songs",
    id: "0",
    description:
      "Abida Parveen is a sufi singer from Sindh, She Specalizes in the art of" +
      " Sufism and she devotes her life to the spirituality of the world.",
    img: "Assets/AbidaP.png",
  },
  {
    name: "Deva Premal",
    sub: "Spritual and Sanskritist",
    id: "1",
    description:
      "Deva Premal is a singer known for introducing Sanskrit mantras into the mainstream" +
      "Her meditative, spiritual music produced with Prabhu Music puts ancient Tibetan and Sanskrit mantras into contemporary settings.",
    img: "Assets/Dava.jfif",
  },
  {
    name: "Roger Waters",
    sub: "CO Founder of pink floyd band",
    id: "2",
    description:
      "George Roger Waters is an English musician, singer songwriter and composer" +
      " who is known for his work in the genre of Spritual music.",
    img: "Assets/RogerWaters.png",
  },
  {
    name: "Ludovico Einaudi",
    sub: "Italian Piano Composer",
    id: "3",
    description:
      "Ludovico Maria Enrico Einaudi OMRI is an Italian pianist and composer. Trained at the Conservatorio Verdi in Milan" +
      "Einaudi began his career as a classical composer, later incorporating other styles and genres such as pop, rock, folk, and world music",
    img: "Assets/pianoman.png",
  },
  {
    name: "Batzorig Vaanchig",
    sub: "Mongolian Throat Singner",
    id: "4",
    description:
      "Batzorig Vaanchig Is an Mongolion Thorat Singer who specializes in igniting" +
      " the fire of the great Mongol Historien Leader Gengis Khan.",
    img: "Assets/Batzorig.jfif",
  },
  {
    name: "Andre Watts",
    sub: "American Singer",
    id: "5",
    description:
      "Andre Watts is an American singer, songwriter, and musician. He is known for his" +
      " work in the genre of Classical Music.",
    img: "Assets/Andre.jfif",
  },
];

const template = `
<h3 class="type">Featured Artist</h3>
<div class="line line1"></div>
<section class="container">
    <article class ="art 1">
        <img src="${artist[0].img}" alt="${artist[0].name}" class="artist-img"> 
        <div class ="arti>
            <h4 class="artist-name">${artist[0].name}</h4>
            <p class="sub">${artist[0].sub}</p>
            <div class ="line line2"></div>
            <p class="artist-description">${artist[0].description}</p>
        </div>
    </article>
    <article class ="art 2">
        <img src="${artist[1].img}" alt="${artist[1].name}" class="artist-img">
        <div class ="arti">
            <h4 class="artist-name">${artist[1].name}</h4>
            <p class ="sub">${artist[1].sub}</p>
            <div class ="line line2"></div>
            <p class="artist-description">${artist[1].description}</p>
        </div>
    </article>
    <button class="btn-more btn-sec" id="expand">MORE</button>
    <article class ="art 3 more">
        <img src="${artist[2].img}" alt="${artist[2].name}" class="artist-img">
        <div class ="arti">
            <h4 class="artist-name">${artist[2].name}</h4>
            <p class ="sub"> ${artist[2].sub}</p>
            <div class="line line2"></div>
            <p class="artist-description">${artist[2].description}</p>
        </div>
    </article>
    <article class ="art 4 more">
        <img src="${artist[3].img}" alt="${artist[3].name}" class="artist-img">
        <div class="arti">
            <h4 class="artist-name">${artist[3].name}</h4>
            <p class = "sub">${artist[3].sub}</p>
            <div class="line line2"></div>
            <p class="artist-description">${artist[3].description}</p>
        </div>
    </article>
    <article class ="art 5 more">
        <img src="${artist[4].img}" alt="${artist[4].name}" class="artist-img">
        <div class="arti">
            <h4 class="artist-name">${artist[4].name}</h4>
            <p class = "sub">${artist[4].sub}</p>
            <div class="line line2"></div>
            <p class="artist-description">${artist[4].description}</p>
        </div>
    </article>
    <article class ="art 6 more">
        <img src="${artist[5].img}" alt="${artist[5].name}" class="artist-img">
        <div class ="arti">
            <h4 class="artist-name">${artist[5].name}</h4>
            <p class = "subtitle">${artist[5].sub}</p>
            <div class ="line line2"></div>
            <p class="artist-description">${artist[5].description}</p>
        </div>
    </article>
    <button class="btn-less more btn-sec" id="absorb">LESS</button>
</section>
`;

const grid = document.getElementById("Guests");
grid.innerHTML = template;
const expand = document.getElementById("expand");
const absorb = document.getElementById("absorb");
const more = document.querySelectorAll(".more");

expand.addEventListener("click", () => {
  for (let i = 0; i < more.length; i++) {
    more[i].classList.remove("more");
  }
  expand.style.opacity = "0";
});

absorb.addEventListener("click", () => {
  for (let k = 0; k < more.length; k++) {
    more[k].classList.add("more");
  }
  expand.style.opacity = "1";
});
