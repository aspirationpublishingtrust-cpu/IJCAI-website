const params = new URLSearchParams(window.location.search);

const articleID = params.get("id");

console.log(articleID);

fetch("data/articles.json")

.then(response => response.json())

.then(data => {

console.log(data);

const article = data.find(

item => item.id === articleID

);

// Title
document.getElementById("title").textContent = article.title;

// Authors
document.getElementById("authors").textContent =
article.authors.join(", ");

// Affiliations
document.getElementById("affiliations").innerHTML =
article.affiliations.join("<br>");

// Received Date
document.getElementById("received").textContent =
article.received;

// Accepted Date
document.getElementById("accepted").textContent =
article.accepted;

// Published Date
document.getElementById("published").textContent =
article.published;

// DOI
document.getElementById("doi").textContent = article.doi;

// Abstract
document.getElementById("abstract").textContent =
article.abstract;

// Keywords
document.getElementById("keywords").textContent =
article.keywords.join(", ");

// Download PDF
const pdf = document.getElementById("download");
pdf.href = article.pdf;

//Citation
const citation =
`${article.authors.join(", ")} (2026). ` +
`${article.title}. ` +
`Interdisciplinary Journal of Computing & AI (IJCAI), ISSN: 3139-7166, ` +
`Vol. ${article.volume}, Issue ${article.issue}, ` +
`pp. ${article.pages}. ` +
`${article.doi}`;

document.getElementById("citation").textContent = citation;
});
