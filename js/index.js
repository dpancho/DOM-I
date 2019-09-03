const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//----------------//
//-------NAV------//
//----------------//
const nav = document.querySelectorAll('nav a');

nav.forEach(element => element.getElementsByClassName.color = "gray");

nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const navLogo = document.querySelector("#logo-img");
navLogo.src = siteContent.nav["img-src"];

//new elements

const newNav = document.querySelector("nav");

const newElement1 = document.createElement("a");
newElement1.textContent = "Gaba";
newElement1.href = "#";
newElement1.style.color = "green";

const newElement2 = document.createElement("a");
newElement2.textContent = "Gool";
newElement2.href = "#";
newElement2.style.color = "green";

newNav.prepend(newElement1);
newNav.append(newElement2);

//----------------//
//------CTA-------//
//----------------//

const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent.cta["h1"].replace(/\s/g, "</br>");

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

const ctaButt = document.querySelector(".cta-text button");
ctaButt.textContent = siteContent.cta["button"];


//----------------//
//----MidStuff----//
//----------------//

const midHeads = document.querySelectorAll(".main-content h4");
midHeads[0].textContent = siteContent["main-content"]["features-h4"];
midHeads[1].textContent = siteContent["main-content"]["about-h4"];
midHeads[2].textContent = siteContent["main-content"]["services-h4"];
midHeads[3].textContent = siteContent["main-content"]["product-h4"];
midHeads[4].textContent = siteContent["main-content"]["vision-h4"];

const midPees = document.querySelectorAll(".main-content p");
midPees[0].textContent = siteContent["main-content"]["features-content"];
midPees[1].textContent = siteContent["main-content"]["about-content"];
midPees[2].textContent = siteContent["main-content"]["services-content"];
midPees[3].textContent = siteContent["main-content"]["product-content"];
midPees[4].textContent = siteContent["main-content"]["vision-content"];

const midImg = document.querySelector("#middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//----------------//
//----Contacts----//
//----------------//

const contactHeads = document.querySelector(".contact h4");
contactHeads.textContent = siteContent.contact["contact-h4"];

const contactPees = document.querySelectorAll(".contact p");
contactPees[0].textContent = siteContent.contact["address"];
contactPees[1].textContent = siteContent.contact["phone"];
contactPees[2].textContent = siteContent.contact["email"];

//----------------//
//----footsies----//
//----------------//

const footsies = document.querySelector("footer p");
footsies.textContent = siteContent.footer["copyright"];