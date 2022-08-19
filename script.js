const inputText = document.querySelector("#text-area");
const btn = document.querySelector(".btn");
const outputText = document.querySelector(".output");

const yodaUrl = "https://api.funtranslations.com/translate/yoda.json";

const translateText = async (text) => {
  try {
    const url = `${yodaUrl}?text=${text}`;
    const res = await fetch(url);
    const data = await res.json();
    const translatedText = data.contents.translated;
    outputText.innerHTML = `<p>${translatedText}</p>`;
  } catch (error) {
    alert("something went wrong, please try again after some time ");
  }
};

btn.addEventListener("click", () => {
  if (inputText.value == "") {
    alert("Please Enter text ");
  } else {
    translateText(inputText.value);
  }
});
