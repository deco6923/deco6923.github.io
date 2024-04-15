const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);

const image = document.getElementById("dog-image")

const endpoint = "https://dog.ceo/api/breeds/image/random";


async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json["message"]);
        // console.log(json["answer"]);

        displayQuote(json["message"]);
        
        // answer = json["answer"];
        // answerText.textContent = "";

        
    } catch (err) {
        console.log(err);
        alert("Failed to fetch message!");
    }

}

function displayQuote() {
    fetch(endpoint)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.message
        })
        .catch(err=>console.log(err))
    
}

getQuote();