const userInput = prompt("Are you ready to waste at least 1 minute of your time? y/n")

if (userInput === "y" || userInput === "yes"){
    alert("Welp... Good Luck")
} else if (userInput === "n" || userInput === "no") {
    alert("Welp.. You're still going to waste your time")
} else {
    alert("Doesn't matter... Let's continue")
}*/

let volume = document.getElementById('volume')
let newVolume = 0;
let colorIndex = 0
function changeColor1(event){
    const colors = ['grey', 'pink', 'red', 'rgb(186, 44, 115)', 'green', 'orange', 'red', 'purple'];
    event.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 

    if (colorIndex == 3 || colorIndex == 7){
        newVolume += 5;
        volume.innerHTML = `Current Volume: ${newVolume}`
    } 

}

function changeColor2(event){
    const colors = ['grey', 'pink', 'red', 'rgb(186, 44, 115)', 'green', 'orange', 'red', 'purple'];
    event.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 

    if (colorIndex == 3 || colorIndex == 7){
        newVolume -= 5;
        volume.innerHTML = `Current Volume: ${newVolume}`
    } 
}

function changeColor3(event){
    const colors = ['grey', 'darkpink', 'red', 'rgb(186, 44, 115)', 'green', 'orange', 'red', 'purple'];
    event.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 

    if (colorIndex == 3 || colorIndex == 7){
        newVolume += 1;
        volume.innerHTML = `Current Volume: ${newVolume}`
    } 
}

function changeColor4(event){
    const colors = ['grey', 'pink', 'red', 'rgb(186, 44, 115)', 'green', 'orange', 'red', 'purple'];
    event.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; 

    if (colorIndex == 3 || colorIndex == 7){
        newVolume -= 1;
        volume.innerHTML = `Current Volume: ${newVolume}`
    } 
}

let resetBtn = document.getElementById('reset');
let new1 = 0
function resetVolume(){
    volume.innerHTML = `Current Volume: ${new1}`
    newVolume = 0
    button1.style.backgroundColor = 'palevioletred'
    button2.style.backgroundColor = 'aqua'
    button3.style.backgroundColor = 'yellow'
    button4.style.backgroundColor = 'greenyellow'
}