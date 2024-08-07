if (performance.navigation.type === 1 ){
    
var imageList = ["./images/dice1.png", "./images/dice2.png" , "./images/dice3.png", "./images/dice4.png", "./images/dice5.png" , "./images/dice6.png" ];

var firstNumberGenerated;

var secondNumberGenerated;

function randomNumberGenerator1(){
    var random = Math.floor(Math.random() * 6) ;

    firstNumberGenerated = random;
    return random;
}
console.log (firstNumberGenerated);

function randomNumberGenerator2(){
    var random = Math.floor(Math.random() * 6) ;
    secondNumberGenerated = random;
    return random;
}

function whoWins (){
    if (firstNumberGenerated === secondNumberGenerated) {
        return document.querySelector(".container h1").innerHTML= "Draw";
    } else if(firstNumberGenerated > secondNumberGenerated){
        return [document.querySelector(".container h1").innerHTML= "Player one wins 🚩🚩"] , [document.querySelector("h1").classList.add("onload-h1")];
    }
        else {
            return [document.querySelector(".container h1").innerHTML= "Player two wins 🚩🚩"], [document.querySelector("h1").classList.add("onload-h1")];
    }
}


function randomImageGenerator() {

return [document.querySelector(".img1").setAttribute("src", imageList[randomNumberGenerator1()])] , [document.querySelector(".img2").setAttribute("src", imageList[randomNumberGenerator2()])]

}

function onRefersh (){
    return [randomImageGenerator()] ,[ whoWins ()];
}

onRefersh();
}