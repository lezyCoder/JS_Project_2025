// Selecting elements
let input = document.querySelector("input");
let meaning = document.querySelector(".meaning");
let synonym = document.querySelector("#synonym");
let antonym = document.querySelector("#antonym");
let audio = document.querySelector("audio");
let button = document.querySelector("button");

button.addEventListener("click", async function () {
  let word = input.value.trim(); // Trim extra whitespace

  if (!word) {
    alert("Please enter a word");
    return;
  }

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Word not found");
    }

    let data = await response.json();

    // Safely check nested data to avoid runtime errors
    let definition = data[0]?.meanings[0]?.definitions[0]?.definition || "No definition found";
    let synonyms = data[0]?.meanings[0]?.synonyms || [];
    let antonyms = data[0]?.meanings[0]?.antonyms || [];

    // Convert to string and insert into UI
    synonym.innerHTML = synonyms.length ? synonyms.join(", ") : "NA";
    antonym.innerHTML = antonyms.length ? antonyms.join(", ") : "NA";
    meaning.innerHTML = definition;

    // Optionally, you could also add audio playback here if available in API
    // let audioUrl = data[0]?.phonetics[0]?.audio;
    // if (audioUrl) {
    //   audio.src = audioUrl;
    //   audio.play();
    // }

  } catch (error) {
    meaning.innerHTML = "Error: " + error.message;
    synonym.innerHTML = "NA";
    antonym.innerHTML = "NA";
  }
});
