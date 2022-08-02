/**
 * @TODO implement the onclick event listeners for starters
 * which should:
 *      - change the innerHTML of #poke-text to their id
 */
function starterOnClick(event) {
    // Get the element that was clicked
    let element = event.target;
    // Get the name of the Pokémon
    let pokemonName = element.id;
    // Get a reference to the #poke-text element
    let pokeText = document.getElementById("poke-text");
    
    pokeText.innerHTML = "You chose " + pokemonName;
}


/**
 * @TODO implement addPika button which onclick should:
 *      - create a new img
 *      - set the src images/pikachu.png
 *      - set the id to Pikachu
 *      - add "poke-img" to the classes
 *      - add any necessary event listeners
 * 
 * and then append it to #img-container
 */
let addPika = document.getElementById("add-pika");

addPika.onclick = function() {
    let pikaImg = document.getElementById("pikachu");
    if(pikaImg === null)
    {
        // Create a new image
        pikaImg = document.createElement("img");
        // Add attributes
        pikaImg.setAttribute("src", "images/pikachu.png");
        pikaImg.setAttribute("id", "pikachu");
        // Could also use pikaImg.id = "pikachu";
        pikaImg.setAttribute("class", "poke-img");
        // Could also use pikaImg.classList.add("poke-img");

        // Adds the starterOnClick event to the new image's onclick event
        pikaImg.onclick = starterOnClick;
        pikaImg.onmouseover = starterOnMouseOver;
        pikaImg.onmouseout = starterOnMouseOut;


        let pikaAudio = document.createElement("audio");
        pikaAudio.src = "audio/vc_pikachu_knockout.wav";
        pikaAudio.volume = 0.25;
        pikaAudio.onended = pikaAudio.remove;

        // append pikaImg to img-container
        let imgContainer = document.querySelector("#img-container");
        imgContainer.append(pikaImg);
        imgContainer.append(pikaAudio);
    }
}

/**
 * @TODO implement the rmvPika button which onclick should:
 *      - remove the pikachu image
 */

let thanosSnap = document.getElementById("rmv-pika");
    
thanosSnap.onclick = function() {
    // Get a reference to the element
    let pikaImg = document.getElementById("pikachu");
    let pikaAudio = document.querySelector("audio");
    pikaAudio.play();
    pikaImg.remove();
}

/**
 * @TODO use a for-loop to programmatically add all necessary
 * event listeners to all starters
 */
let pokemon = document.querySelectorAll(".poke-img");
for (let i = 0; i < pokemon.length; i++){
    pokemon[i].onclick = starterOnClick;
    pokemon[i].onmouseover = starterOnMouseOver;
    pokemon[i].onmouseout = starterOnMouseOut;
}


/**
 * @TODO EXTRA CREDIT implement the onmouseover event listener
 * for all starters which should:
 *      - give the current starter a red border
 *      - add a black box shadow of 5px x-offset, 5px y-offset,
 *        and a blur radius of 5px
 */
function starterOnMouseOver(event) {
    let element = event.target;
    element.classList.add("hovered-poke");
}

/**
 * @TODO EXTRA CREDIT implement the onmouseout event listener
 * for all starters which should:
 *      - remove the box shadow
 *      - remove the red border
 */
function starterOnMouseOut(event) {
    let element = event.target;
    element.classList.remove("hovered-poke");
}