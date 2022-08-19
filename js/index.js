/*jshint esversion: 6 */

fetch("https://api.opendota.com/api/heroes")
  .then((res) => res.json())
  .then((data) => makeCards(data));

const person = document.getElementById("interactive_output");
const characters = document.getElementById("heroes");
const open = document.getElementById("open");
const hero_container = document.getElementById("hero_container");
const close = document.getElementById("close");

function openAndCloseModal(open, hero_container, close) {
  open.addEventListener("click", () => {
    hero_container.classList.add("show");
  });

  close.addEventListener("click", () => {
    hero_container.classList.remove("show");
  });
}

function makeCards(charactersArray) {
  const container = document.querySelector("#heroes");
  charactersArray.forEach((character) => {
    container.innerHTML =
      container.innerHTML +
      `
                                                      <li class="characters characters-list" id="${character.id}">
                                                        <a id="open">${character.localized_name}</a>
                                                      </li>`;
  });
}

function searchFun() {
  let input = document.getElementById("findHero");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("heroes");
  let li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    console.log("a");
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

openAndCloseModal(open, hero_container, close);
searchFun();
