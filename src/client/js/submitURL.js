import { trim } from "./helper";
import { titleCase } from "./helper";

function handleUserURLInput(event) {
  event.preventDefault();
  const url = document.getElementById("url-input").value;
  if (!url) {
    console.log("URL value not valid");
    return;
  }
  console.log(url);
  fetch("/analyse-url", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: url })
  })
    .then(res => res.json())
    .then(data => {
      let trimVal = trim(1.552368, 2);
      console.log(`🚀: handleUserURLInput -> trimVal : `, trimVal);

      document.getElementById("polarity").innerHTML = titleCase(data.polarity);
      document.getElementById("subjectivity").innerHTML = titleCase(
        data.subjectivity
      );
      document.getElementById("polarity_confidence").innerHTML = trim(
        data.polarity_confidence,
        2
      );
      document.getElementById("subjectivity_confidence").innerHTML = trim(
        data.subjectivity_confidence,
        2
      );
      document.getElementById("excerpt").innerHTML = data.text;
    });
}

export { handleUserURLInput };
