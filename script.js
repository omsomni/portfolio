var typed = new Typed(".text-type", {
  strings: [
    "Welcome!",
    "This is for UCSP",
    "Understanding Culture, Society, and Politics",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

const logo = document.querySelector(".logo");
const home = document.querySelector(".home");
const activities = document.querySelector(".activities");

logo.addEventListener("click", () => {
  home.classList.remove("hidden");
  activities.classList.add("hidden");
});

const list = document.querySelectorAll(".list");
const title = document.querySelector(".title");

const poem_text = document.getElementById("poem_text");
const open_text = document.getElementById("open_text");

const reflective = document.getElementById("reflective");
const position = document.getElementById("position");

function activeList(e) {
  e.preventDefault();

  home.classList.add("hidden");
  activities.classList.remove("hidden");
  title.classList.remove("hidden");

  console.log(activities);

  poem_text.classList.add("hidden");
  open_text.classList.add("hidden");
  reflective.classList.add("hidden");
  position.classList.add("hidden");

  if (this.id === "open") {
    title.innerHTML = "OPEN LETTER";
    hideExcept(open_text);
  } else if (this.id === "poem") {
    title.innerHTML = "POEM";
    hideExcept(poem_text);
  } else if (this.id === "reflective_paper") {
    title.innerHTML = "REFLECTIVE PAPER";
    hideExcept(reflective);
  } else if (this.id === "position_paper") {
    title.innerHTML = "POSITION PAPER";
    hideExcept(position);
  }
}

function hideExcept(me) {
  me.classList.remove("hidden");
  console.log(me);
}

list.forEach((item) => {
  if (item.id !== "concept_map") item.addEventListener("click", activeList);
});
