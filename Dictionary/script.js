
//  Selecting elements 
let input = document.querySelector("input");
let meaning = document.querySelector(".meaning");
let synonym = document.querySelector("#synonym");
let antonym = document.querySelector("#antonym");
let audio = document.querySelector("audio");
let button = document.querySelector("button");



button.addEventListener("click", async function () {
  let word = input.value;

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  let response = await fetch(url);

  let data = await response.json();

  console.log(data);

  let definition = data[0].meanings[0].definitions[0].definition;
  let synonyms = data[0].meanings[0].synonyms;
  let antonyms = data[0].meanings[0].antonyms;

  //   Converting to string
  let ans = synonyms.join(",");
  let ans2 = antonyms.join(",");

  synonym.innerHTML = `${ans}`;
  antonym.innerHTML = `${ans2}`;

  meaning.innerHTML = `${definition}`;
  //   console.log(definition);

  //   input.value = " ";
});
