// navigacia

const bodyEl = document.querySelector('body');
const navToggle = document.querySelector('.nav__toggle'),
  navToggleImg = navToggle.querySelector('img');
const navList = document.querySelector('.nav__list');
const navBg = document.querySelector('.nav__bg');

let isNavOpen = false;

const checkWindowWidth = w => w > 559 ? showNav(true) : undefined;

window.addEventListener('resize', () => checkWindowWidth(window.innerWidth));

const updateNavAttributes = isOpen => {
  bodyEl.setAttribute('aria-nav', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  navList.setAttribute('data-visible', isOpen);
}

const scrollControls = state => {
  document.body.style.overflowY = state ? "hidden" : "auto";
  if (state) window.scroll(0, 0);
}

updateNavAttributes(isNavOpen);

const showNav = isOpen => {
  isNavOpen = !isOpen;
  navToggleImg.src = `./obr/icon-${isNavOpen ? "close" : "hamburger"}.svg`;
  //navList.style.display = isNavOpen ? "flex" : "none";
  //navBg.style.display = isNavOpen ? "flex" : "none";
  navBg.style.transform = isNavOpen ? "transform: translateX(0) !important" : "transform: translateX(120%) !important";
  navBg.style.color = isNavOpen ? "green" : "red";
  // navBg.style.transition = isNavOpen ? "transition: transform 300ms;" : "none";
  updateNavAttributes(isNavOpen);
  scrollControls(isNavOpen);
}

navToggle.addEventListener('click', () => showNav(isNavOpen));

const links = document.querySelectorAll(".link");

for (const link of links) link.addEventListener('click', () => showNav(true));

// JavaScript sekcia

const root = document.querySelector(":root");

const inputSpans = document.querySelectorAll(".inputSpan");
const stvorec = document.querySelector("#stvorec");
const rgbi = document.querySelector("#rgbi");
const colori = document.querySelector("#colori");
const bri = document.querySelector("#bri");
const font1 = document.querySelector("#font1");
const font2 = document.querySelector("#font2");
const font3 = document.querySelector("#font3");

const fonty = [`\'Josefin Sans\', sans-serif`, `\'Trebuchet MS\', \'Lucida Sans Unicode\'`, `monospace`];

font1.addEventListener('click', () => {
  root.style.setProperty('--ff-p-1', fonty[0]);
});
font2.addEventListener('click', () => {
  root.style.setProperty('--ff-p-1', fonty[1]);
});
font3.addEventListener('click', () => {
  root.style.setProperty('--ff-p-1', fonty[2]);
});

let rgbInterval;

const rgbFarba = () => {
  const fb = ["red", "green", "blue"];
  let i = 0;
  rgbInterval = setInterval(()=> {
    stvorec.style.backgroundColor = fb[i];
    i++;
    i >= fb.length ? i = 0 : null;
  },100);
}

const zmenStvorec = () => {
  Object.assign(stvorec.style, {
    backgroundColor: colori.value,
    borderRadius: bri.value+"px"
  });
  if (rgbi.checked == true) rgbFarba();
  else clearInterval(rgbInterval);
}

const klikolSiNaStvorec = () => {
  alert("Klikol si na štvorec!");
}

stvorec.addEventListener('click', () => {
  klikolSiNaStvorec();
});

for (const i of inputSpans) i.querySelector("input").addEventListener('change', () => zmenStvorec());

