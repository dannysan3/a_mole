let naVerendeFigur;
let naVerendePlante;
let score = 0;
let slutt = false;
let piper=[["pipe.png",1],["pipe.png",2],["pipe.png",3],["pipe.png",4],["pipe.png",5],["pipe.png",6],["pipe.png",7],["pipe.png",8],["pipe.png",9]]
console.log (piper); 


function oppstart() {
    startSpill();
    trekkPipe();
    setInterval(figurNa, 2000);
    setInterval(planteNa, 2000);
}
function trekkPipe(){
    let trukketPipe = Math.floor(Math.random() * 9) + 1;
    console.log(piper[trukketPipe]+" "+trukketPipe)
}
 
function startSpill() {

}
 
function randomBrikke() {
    let number = Math.floor(Math.random() * 9) + 1; // Justert for å unngå 0 og inkludere 9
    return "pipe" + number;
}
 
function figurNa() {
    if (naVerendeFigur) {
        naVerendeFigur.style.visibility = "hidden"; // Skjuler det forrige bildet før flytting
    }
    let pipeId = randomBrikke();
    naVerendeFigur = document.getElementById("p1");
    let pipeElement = document.getElementById(pipeId);
    if (pipeElement) {
        // Oppdaterer naVerendeFigur's posisjon til den valgte pipen
        naVerendeFigur.setAttribute("x", pipeElement.getAttribute("x"));
        naVerendeFigur.setAttribute("y", pipeElement.getAttribute("y"));
        naVerendeFigur.style.visibility = "visible"; // Viser bildet på ny posisjon
    }
}
 
function planteNa() {
    if (naVerendePlante) {
        naVerendePlante.style.visibility = "hidden"; // Skjuler det forrige bildet før flytting
    }
    let pipeId = randomBrikke();
    naVerendePlante = document.getElementById("b1");
    let pipeElement = document.getElementById(pipeId);
    if (pipeElement) {
        // Oppdaterer naVerendePlantes posisjon til den valgte pipen
        naVerendePlante.setAttribute("x", pipeElement.getAttribute("x"));
        naVerendePlante.setAttribute("y", pipeElement.getAttribute("y"));
        naVerendePlante.style.visibility = "visible"; // Viser bildet på ny posisjon
    }
}
 
function velgBrikke() {
    if ( this == naVerendeFigur){
        score += 100;
        document.getElementById("score")
        score.innerHTML="score"
}
}