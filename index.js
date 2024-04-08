import { tabSortedByDate } from "./array.js";
import { createCustomElement } from "./array.js";

const articles = [
  {
    id: 1,
    titre: "Titre article n°1",
    content: "2024-04-03",
    createdAt: "2024-04-03", // date de création
    // updatedAt: '10/12/2023', // date de modification
    picture: "/images/a.jpg",
    alternativeText: "Ceci est un A",
    isActive: true,
  },
  {
    id: 2,
    titre: "Titre article n°2",
    content: "Mon deuxième article",
    createdAt: "2022-04-03",
    picture: "/images/b.jpg",
    alternativeText: "Test",
    isActive: true,
  },
  {
    id: 3,
    titre: "Titre article n°3",
    content: "Mon troisième article",
    createdAt: "2023-04-03",
    picture: "/images/c.jpg",
    alternativeText: "Ceci n'est pas un A",
    isActive: true,
  },
];

const root = document.querySelector("#root");

// appel function
const articlesSorted = tabSortedByDate(articles);

articlesSorted.map((article, i) => {
  // add key ..

  createCustomElement("p", article.content);

  const titre = createCustomElement("h2", article.content);

  const image = document.createElement("img");
  image.setAttribute("src", article.picture);
  image.setAttribute("alt", article.alternativeText);

  root.append(titre, image, content);
});

// console.log(articlesSorted);
// filter
// const articlesLatest = articles.filter((article) => article.isActive);
// fin bouclage.

// .map vs .forEach

// const tab = [1, 5, 7, 3];

// console.log('tab :', tab)

// const newTab = [];
// tab.forEach((n) => {
//   const nbre = n * 2;
//   newTab.push(nbre);
// });

// const newTab = tab.filter((n) => n > 3);

// console.log('newtab :', newTab);

// const dateInput = document.querySelector('#date');

// dateInput.addEventListener('change', (e) => {
//   console.log(e.target.value);
// });

// bouclage ici ...
// for (let i = 0; i < articles.length; i += 1) {
//   const p = document.createElement('p');
//   p.innerText = articles[i].content;

//   const titre = document.createElement('h2');
//   titre.innerText = articles[i].titre;

//   root.append(titre);
//   root.append(p);
// }
// const dateA = new Date(articles[0].createdAt);
// console.log(dateA);
// sort => toSorted
