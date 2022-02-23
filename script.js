fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())// first convert into json
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text; //get text
    const jokeElement = document.getElementById("jokeElement");// get data from p tag id
    jokeElement.innerHTML= jokeText; //set the value with innerhtml
})