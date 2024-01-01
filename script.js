const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const omList = document.getElementById('omlist');
const haandList = document.getElementById ('haandlist');
const bodyElement = document.body;
const bookBtn = document.getElementById('bookbtn')


burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  document.body.classList.toggle("bodyoverlay");
});


omList.style.display = "none"; 

omList.addEventListener('click', function() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
    document.body.classList.toggle("bodyoverlay");
  });
  
function openDropdown() {
    if (omList.style.display != "none") {
      omList.style.display = "none";
    } else {
      omList.style.display = "block";
    }
}

haandList.style.display = "none"; 

haandList.addEventListener('click', function() {
      burgerMenu.classList.remove("close");
      overlay.classList.remove("overlay");
    });
    
    function openHaandDropdown() {
      if (haandList.style.display != "none") {
        haandList.style.display = "none";
      } else {
        haandList.style.display = "block";
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Dine eksisterende kodedele her
    
        if (bookBtn !== null) {
            bookBtn.addEventListener('click', gemBooking);
        }
    
        console.log('event lister tilføjet');

        function gemBooking() {
            let navn = document.getElementById("navn").value;
            let email = document.getElementById("email").value;
            let behandling = document.getElementById("behandling").value;
            let aftagning = document.getElementById("aftagning").value;
            let tid = document.getElementById("tid").value;
        
            // Nulstil fejlbeskeder
            resetFejlbeskeder();
        
            // Valider navn og email
            validateNotEmpty(navn, "navn-fejl", "Navn må ikke være tomt.");
            validateNotEmpty(email, "email-fejl", "Email må ikke være tomt.");
        
            // Valider valgte behandling og aftagning
            validateOption(behandling, ["Shellac®", "Shellac® - med nail art", "Forstærkning", "Forstærkning - enkelt farve", "Forstærkning - med nail art", "Forlængelse - enkelt farve", "Forlængelse - med nail art", "Opfyldning - enkelt farve", "Opfyldning - med nail art", "Manicure og negleolie"], "behandling-fejl", "Vælg en gyldig behandling.");
        
            validateOption(aftagning, ["med aftagning", "uden aftagning"], "aftagning-fejl", "Vælg en gyldig aftagning.");
        
            // Valider valgt tid
            validateOption(tid, ["Mandag kl 16 og frem", "Tirsdag kl 20 og frem", "Onsdag kl 17 og frem", "Torsdag kl 13 og frem", "Lørdag kl 10 og frem", "Søndag kl 12 og frem"], "tid-fejl", "Vælg en gyldig tid.");
        
            // Hvis der er fejl, afslut funktionen uden at sende booking
            if (erDerFejl()) {
                return;
            }
        
            // Konstruer besked og send booking
            let body = 'Hej <b>' + navn + '</b><p>du har bestilt tid den ' + tid + '</p> til følgende behandling ' + behandling + aftagning + '. Jeg glæder mig til at se dig. ';
        
            var fetchUrl = 'https://jimppbookingapi.azurewebsites.net/api/NailBooking/SendBookingNotification?email=' + email + '&navn=' + navn + '&tid=' + tid + '&body=' + body;
        
            fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)));
        
            // Omdiriger kun hvis alt er i orden
            window.location.href = 'kvittering.html';
        }
        
        // Funktion til at nulstille fejlbeskeder
        function resetFejlbeskeder() {
            let fejlbeskeder = document.querySelectorAll(".fejlbesked");
            fejlbeskeder.forEach(fejl => {
                fejl.innerHTML = "";
            });
        }
        
        // Funktion til at validere, om et inputfelt ikke er tomt
        function validateNotEmpty(value, fejlId, fejlbesked) {
            if (value.trim() === "") {
                document.getElementById(fejlId).innerHTML = fejlbesked;
            }
        }
        
        // Funktion til at validere valgte option mod en liste af gyldige muligheder
        function validateOption(valgtVærdi, gyldigeMuligheder, fejlId, fejlbesked) {
            if (!gyldigeMuligheder.includes(valgtVærdi)) {
                document.getElementById(fejlId).innerHTML = fejlbesked;
            }
        }
        
        // Funktion til at kontrollere, om der er nogen fejlbeskeder
        function erDerFejl() {
            let fejlbeskeder = document.querySelectorAll(".fejlbesked");
            for (let i = 0; i < fejlbeskeder.length; i++) {
                if (fejlbeskeder[i].innerHTML !== "") {
                    return true;
                }
            }
            return false;
        }

    });

//play video on mouse over
/*video1*/
function playVideo() {
    let video = document.getElementById("tiktok1");
    video.play();
}

function pauseVideo() {
    let video = document.getElementById("tiktok1");
    video.pause();
    //video.currentTime = 0;
}

/*video2*/

function playVideoto() {
  var videoto = document.getElementById("tiktok2");
  videoto.play();
}

function pauseVideoto() {
  var videoto = document.getElementById("tiktok2");
  videoto.pause();
}

/*video3*/

function playVideotre() {
  var videotre = document.getElementById("tiktok3");
  videotre.play();
}

function pauseVideotre() {
  var videotre = document.getElementById("tiktok3");
  videotre.pause();
}

/*video4*/

function playVideofire() {
  var videofire = document.getElementById("tiktok4");
  videofire.play();
}

function pauseVideofire() {
  var videofire = document.getElementById("tiktok4");
  videofire.pause();
}

/*setTimeout for billedeflipflop
  
  

document.addEventListener("DOMContentLoaded", function() {
  // Vælg din div ved hjælp af dens ID eller klasse og tilføj klassen efter en forsinkelse
  setTimeout(function() {
    document.getElementById("rammeTo").classList.add("Topic");
  }, 200); // 200 millisekunders forsinkelse (0,2 sekunder)
});
/*det her kom aldrig til at virke - men tror ideen er her. hele billedekarusellen kører
i css, så hvis vi skulle opnå en forskydelse, så de skiftede billede
fra venstre mod højre, burde setTimeout være løsningen */



/* duttelut til at få burgeren til at forsvinde og dukke op W3 school - virker ikke heeeelt
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
}*/

/*------galleri------*/

function change (element) {
  element.classList.toggle("fullsize")
}

function change(element) {
  var isFullsize = element.classList.contains('fullsize');

  var allImages = document.querySelectorAll('.galImg');
  allImages.forEach(function (img) {
    img.classList.remove('fullsize');
  });

  if (!isFullsize) {
    element.classList.add('fullsize');
  }
}

/*------- Farveguide ------*/

function changeColor(color) {
  // Skjuler alle color boxes
  hideColorBoxes();

  // Viser den valgte color box
  const colorBox = document.getElementById(`${color}Box`);
  colorBox.classList.remove('hidden');
}

function hideColorBoxes() {
  // Skjuler alle color boxes
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(box => {
    box.classList.add('hidden');
  });
}

let mobilTikTok1 = document.getElementById("mobiltiktok1");
let mobilTikTok2 = document.getElementById("mobiltiktok2");
let mobilTikTok3 = document.getElementById("mobiltiktok3");
let mobilTikTok4 = document.getElementById("mobiltiktok4");

let venstrepil = document.getElementById("venstrepil"); 
let hoejrepil = document.getElementById("højrepil");



// Array

let carousel = [mobilTikTok1, mobilTikTok2, mobilTikTok3, mobilTikTok4];

mobilTikTok1.style.display = "block";
mobilTikTok2.style.display = "none";
mobilTikTok3.style.display = "none";
mobilTikTok4.style.display = "none"; 



// Knapper med billeder af pile
hoejrepil.addEventListener("click", naesteFilm);
venstrepil.addEventListener("click", forrigeFilm);


function naesteFilm(){
  carousel[0].style.display = "none"; // Skjul den viste
  carousel.push(carousel[0]); // Put den første ind til sidst
  carousel.shift(); // Fjern den første og flyt alle en ned
  carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeFilm(){
  carousel[0].style.display = "none"; // Skjul den viste
  carousel.push(carousel[0]); // Put den første ind til sidst
  carousel.shift(); // Fjern den første og flyt alle en ned
  carousel[0].style.display = "block"; // Vis den der nu er først
}

// Funktion til at skifte til næste billede
/*function visnaesteFilm() {
  if (mobilTikTok1.style.order === '1') {
    mobilTikTok1.style.order = '2';
      mobilTikTok2.style.order = '3';
      mobilTikTok3.style.order = '1';
      mobilTikTok4.style.order
  } else if (mobilTikTok2.style.order === '1') {
    mobilTikTok1.style.order = '1';
    mobilTikTok2.style.order = '2';
      mobilTikTok3.style.order = '3';
  } else {
    mobilTikTok1.style.order = '3';
    mobilTikTok2.style.order = '1';
    mobilTikTok3.style.order = '2';
  }
}

// Funktion til at skifte til forrige billede
function visforrigeBillede() {
  if (mobilTikTok1.style.order === '1') {
    mobilTikTok1.style.order = '3';
    mobilTikTok2.style.order = '1';
    mobilTikTok3.style.order = '2';
  } else if (mobilTikTok2.style.order === '2') {
    mobilTikTok1.style.order = '2';
    mobilTikTok2.style.order = '3';
    mobilTikTok3.style.order = '1';
  } else { (mobilTikTok3.style.order === '3') 
      mobilTikTok1.style.order = '1';
      mobilTikTok2.style.order = '2';
      mobilTikTok3.style.order = '3';
  }
}*/
