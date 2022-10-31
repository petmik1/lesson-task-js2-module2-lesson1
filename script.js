const result = document.querySelector(".gamesList");

const games = [
    { id: 324, name: "Great game", rating: 5.0 },
    { id: 124, name: "Ok game", rating: 3.0 },
    { id: 678, name: "Meh game", rating: 2.5 },
    { id: 28, name: "Terrible game", rating: 1.0 },
    { id: 4, name: "Mediocre game", rating: 3.0 },
];

games.forEach (createList)

function createList(Element) {
 console.log(Element)
 result.innerHTML +=`
    <li>${Element.name} Rating: ${Element.rating}</li>
 `
}
const items = document.querySelectorAll("li");
items.forEach(function(item){
    item.addEventListener("click", toggleClass);
});

function toggleClass(event){
    event.target.classList.toggle("played");
}