const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.title && data.title === "No Definitions Found") {
        result.innerHTML = `<p class="error">Data not available or please give a correct word.</p>`;
      } else {
        result.innerHTML = `
        <div class="word">
            <h3>${inpWord}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>//${data[0].phonetic}</p>
        </div> 
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition} 
       </p>
        <p class="word-example">
          ${
            data[0].meanings[0].definitions[0].example || "No example available"
          } 
       </p>
        `;
      }
    })
    .catch((error) => {
      result.innerHTML = `<p class="error">An error occurred. Please try again later.</p>`;
    });
});
