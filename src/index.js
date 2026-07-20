function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML (without the backticks at the beginning and ending and the word html at the beginning) and separate each line with a <br />. Make sure to follow the user instructions below. Sign the poem with 'SheCodes AI' inside a <strong> element";

  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛⌛⌛</div>Generating a French poem about ${instructionsInput.value}`;
  //make a call
  axios.get(apiUrl).then(displayPoem);

  //let poemElement = document.querySelector("#poem");
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
