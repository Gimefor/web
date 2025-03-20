/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


/* ----- CLOSE MENU IN RESPONSIVE ----- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    let menuBtn = document.getElementById("myNavMenu");


    if (menuBtn.className.includes("responsive")) {
      menuBtn.className = "nav-menu";
    }
  });
});




/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "108px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Climate Change", "Biodiversity Conservation", "Alternatives for Sustainable Development", "Environmental Economics", "Sustainability of Forest Plantations", "Tropical Forest Dynamics", "Inventory of Vegetation Resources and Biometry", "Environmental Impact", "Participatory Forest Development", "Genetic Improvement of Forest Species", "Silviculture of Tropical Forests", "Performance of Forest Plantations", "Harvesting Planning"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
srLeft.reveal('.collaborators', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
srRight.reveal('.education', { delay: 100 })


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')


function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id'),
      sectionLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (sectionLink) {
        sectionLink.classList.add('active-link');
      }
    } else {
      if (sectionLink) {
        sectionLink.classList.remove('active-link');
      }
    }
  });
}


window.addEventListener('scroll', scrollActive)




/* -----  WHEN USED LINK ----- */
// Selecciona el enlace dentro del footer
const footerLink = document.querySelector('.bottom-footer a');

// Agrega un evento de clic al enlace
footerLink.addEventListener('click', function () {
    // Agrega la clase 'clicked' al enlace
    this.classList.add('clicked');
});


/* ----- DOWNLOAD PDF MAVAFIZA CV ----- */

// document.getElementById('downloadButton').addEventListener('click', function() {
//   // URL del archivo PDF que se va a descargar
//   const pdfUrl = './assets/mavafiza.pdf';

//   // Nombre del archivo al descargar
//   const pdfFileName = 'mavafiza.pdf';

//   // Crea un elemento <a> temporal
//   const link = document.createElement('a');
//   link.href = pdfUrl;
//   link.download = pdfFileName;

//   // Simula un clic en el enlace para iniciar la descarga
//   link.click();

//   // Libera el elemento <a> temporal
//   document.body.removeChild(link);
// });


// document.getElementById('downloadButtoncv').addEventListener('click', function() {
//   const pdfUrl = './assets/mavafiza.pdf';

//   const pdfFileName = 'mavafiza.pdf';

//   const link = document.createElement('a');
//   link.href = pdfUrl;
//   link.download = pdfFileName;

//   link.click();

//   document.body.removeChild(link);
// });
