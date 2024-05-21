
// function sayHello() {
//     elText.innerHTML += "Hi, "
// }
// let myInterval = setInterval(sayHello, 1000)


// elBtn.onclick = () => {
//     clearInterval(myInterval)
// }



const elText = document.querySelector(".text");
let soat = +prompt("Soantni kirit");
let minut = +prompt("Minutni kirit");
let sekund = +prompt("Sekundni kirit");
function timer() {
    if (soat == 0 && minut == 0 && sekund == 0) {
        elText.innerHTML = "Time is up";
        elText.style.color = "red";
    }
    else {
        sekund--;
        if (sekund < 0) {
            minut--;
            sekund = 59;
        }
        if (minut < 0) {
            soat--;
            minut = 59;
        }
        elText.innerHTML = soat + ":" + minut + ":" + sekund
    }
}

setInterval(timer, 1000)