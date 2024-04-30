const userInput = prompt("Are you ready to waste at least 1 minute of your time? y/n")

const myDiv = document.querySelector('div');
const button1 = document.getElementById('button1')

if (userInput === "y" || userInput === "yes"){
    alert("Welp... Good Luck")
} else if (userInput === "n" || userInput === "no") {
    alert("Welp.. You're still going to waste your time")
} else {
    alert("Doesn't matter... Let's continue")
}

let colorIndex = 0
function changeColor(event){
    const colors = ['grey', 'pink', 'blue', 'yellow', 'purple', 'orange', 'red'];
    event.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

    // if the color of the button = red then add 5 to the volume
}
