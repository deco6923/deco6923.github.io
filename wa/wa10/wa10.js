const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "In a sun-drenched meadow, the sun was shining at a cool, crisp 97 fahrenheit. In an attempt to enjoy the decent weather, :insertx: went for a trip to go skydiving. When the creatures got to :inserty:, they did a little dance, then :insertz:. Bob was the homeless man that lived in the area. He didn't know if he was hallucinating but decided that everything made sense as :insertx: was 450 pounds, and everyone deserves a little privacy. It was none of his business anyways.";

let insertX = ["Buzz the bee","Flo the Chameleon","Moolissa the Cow"];

let insertY = ["the dark meadow", "Colfax", "your mom's house"];

let insertZ = ["cried and ran away", "turned into dust", "fell in love with a tree"];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    
    newStory = newStory.replaceAll(":insertx:", xItem)

    newStory = newStory.replaceAll(":inserty:", yItem)

    newStory = newStory.replaceAll(":insertz:", zItem)


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((94-32) * 5/9) + " celsius";

    newStory = newStory.replaceAll("97 fahrenheit", temperature);
    newStory = newStory.replaceAll("450 pounds", weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}