const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["cow1.jpg", "cow2.jpg", "cow3.jpg", "cow4.jpg", "cow5.jpg"];

/* Declaring the alternative text for each image file */
const obj = ["Calf with a jacket on", "Calf running towards the camera", "Calf in the field", "Three calves in a line", "White calf licking its nose"];

/* Looping through images */

for(let i = 0; i < fileNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', obj[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.src = newImage.src;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "Dark"){
        btn.setAttribute("class", "Light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "Dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(255,255,255,0.5)";
    }
});