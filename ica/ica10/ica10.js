const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText)

const body = document.querySelector("body");
document.querySelector("#button2").addEventListener("click", changeColor);

const button2 = document.querySelector("#button2");
button2.addEventListener('click', changeText2)


function changeText(){
    button1.textContent = `Wait... you're safe mortal... for now`;
}

function changeText2(){
    button2.textContent = `YOU CHOSE WRONG!`;
}

function changeColor(){
    body.style.backgroundColor = ("red")
}
