let wrapper = document.querySelector(".wrapper");
let savollar = [
  {
    savol: "Osmonni rangi qanaqa?",
    javob: "moviy",
  },
  {
    savol: "Navro`z qaysi faslda nishonlanadi?",
    javob: "bahor",
  },
  {
    savol: "Javascriptda takrorlanuvchi operator nomi?",
    javob: "for",
  },
];
let son = Math.floor(Math.random() * savollar.length);

let h1 = document.createElement("h1");
h1.textContent = savollar[son].savol;

wrapper.append(h1);

let javob = savollar[son].javob.split("");

javob.forEach((el, i) => {
  let button = document.createElement("button");
  button.setAttribute("id", `b${i}`);
  button.setAttribute("class", `button`);
  button.textContent = "_";
  wrapper.append(button);
});

let hr = document.createElement("hr");
wrapper.append(hr);

let alfavit = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

alfavit.forEach((el, i) => {
  let button = document.createElement("button");
  button.textContent = el;
  button.addEventListener("click", () => {
    let index = javob.indexOf(el);
    if (index >= 0) {
      let b = document.getElementById(`b${index}`);
      b.textContent = el;
      win();
    }
  });
  wrapper.append(button);
});

let timer = document.createElement("div");
wrapper.append(timer);
timer.classList.add("timer");
let time = 30;
setInterval(() => {
  timer.textContent = time;
  time--;
  if (time == 0) {
    location.reload();
  }
}, 1000);

window.addEventListener("keydown", (e) => {
  let index = javob.indexOf(e.key.toLowerCase());
  if (index >= 0) {
    let b = document.getElementById(`b${index}`);
    b.textContent = e.key.toLowerCase();
    win();
  }
});

function win() {
  let btn = document.querySelectorAll(".button");
  btn.forEach((el) => {
    console.log(el.textContent);
  });
}


