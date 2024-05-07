let plante;
let blomst;
let sisteTall = -1;
score = 0
let intervallId;
let intervalVarighet = 2000; // Initial interval duration
let harStartet = false; 
let highScore = 0

function oppstart() {
    intervallId = setInterval(figurNaa, intervalVarighet);
}

 
//Henter random brikke, sørger for at man ikke trekker samme
function randomBrikke() {
    let ind;
    do {
        ind = Math.floor(Math.random() * 9) + 1;;
    } while (ind === sisteTall); 
    sisteTall = ind; 
    return "pipe"+ind;
}

function figurNaa() {
    let harKlikket = false

    //Trekker tilfeldig pipe og oppdaterer fiugerene
    let pipeId = randomBrikke();
    let pipeId2= randomBrikke();

    plante = document.getElementById("p1");
    blomst = document.getElementById("b1");

    let pipeElement = document.getElementById(pipeId);
    let pipeElement2 = document.getElementById(pipeId2);

    oppdaterPos(plante, pipeElement);
    oppdaterPos(blomst, pipeElement2);

    
    if (intervalVarighet > 1100 && harStartet) {
        intervalVarighet -= 100;
        clearInterval(intervallId);
        intervallId = setInterval(figurNaa, intervalVarighet);
    }

    //Hvis brukeren har startet spillet, og ikke klikket på en figur før den bytter plass, mister bruker poeng
    if (harStartet && !harKlikket) { 
        score -= 25; 
        if (score < 0){ //Hvis bruker får - poeng taper bruker
            score = 0
            gameOver()
        }
        document.getElementById("score").innerHTML = score;
    }
   
      harKlikket = false;

}

//Funksjon for å oppdatere posisjon til elementer
function oppdaterPos(element, pipeElement) {
    element.setAttribute("x", pipeElement.getAttribute("x"));
    element.setAttribute("y", pipeElement.getAttribute("y"));
    element.style.visibility = "visible";
}


function gameOver() {
    
    // Henter game over boksen og gjør den synlig
    let gameOverBox = document.getElementById("game-over-box");
    gameOverBox.style.display = "block";
    let rundeScoreSpan = document.getElementById("rundeScore");
    rundeScoreSpan.textContent = highScore;

    // Henter highscore tabellen og legger til ny rad
    let tabell = document.getElementById("score-tabell");
    let nyRad = tabell.insertRow(-1); 
    let datoKol = nyRad.insertCell(0); 
    let poengKol = nyRad.insertCell(1); 
    let dato = new Date();
    datoKol.textContent = dato.toLocaleTimeString() 
    poengKol.textContent = highScore;
    
    //Stopper timer slik at figurNaa blir kalt
    clearInterval(intervallId)

    //Skjuler planter
    plante.style.visibility = "hidden";
    blomst.style.visibility = "hidden";
}

function spillIgjen() {
    let gameOverBox= document.getElementById("game-over-box");
    gameOverBox.style.display = "none";
    score = 0;
    highScore = 0
    harStartet = false
    intervalVarighet = 2000; 
    document.getElementById("score").innerHTML = score;

    oppstart(); 
}


document.addEventListener("DOMContentLoaded", function() {


    let blomst = document.getElementById("b1");
    let plante = document.getElementById("p1");

    //Hvis man klikker blomst får man poeng
    blomst.addEventListener("click", function() {
        score += 100;
        if (score > highScore){
            highScore = score
        }
        figurNaa() //Fjern denne hvis du ikke vil at figurer skal oppdatere seg når man har trykket riktig
        document.getElementById("score").innerHTML = score;
        harStartet = true;
    });

    //Hvis man trykker planete dør man
    plante.addEventListener("click", function() {
        gameOver()
    });


});