import { trim } from "./helper";
import { titleCase } from "./helper";

function handleUserTextInput(event) {
  event.preventDefault();
  const textValue = document.getElementById("test-statement").value;
  if (!textValue) {
    console.log("Text Value invalid/empty");
    return;
  }
  console.log("Entering handleUserTextInput(event).");
  console.log("TextValue: ");
  console.log(textValue);

  fetch("/api", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ textValue })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Data received: ");
      console.log(data);

      // console.log("JSON.parse(data_received)");
      // console.log(JSON.parse(data));

      // getting the HTML Elements
      let textPolarity = document.getElementById("text_polarity");
      let textSubjectivity = document.getElementById("text_subjectivity");
      let textPolarityConfidence = document.getElementById(
        "text_polarity_confidence"
      );
      let textSubjectivityConfidence = document.getElementById(
        "text_subjectivity_confidence"
      );

      // setting the HTML Element values to the values returned by the API
      textPolarity.innerHTML = titleCase(data.polarity);
      textSubjectivity.innerHTML = titleCase(data.subjectivity);
      textPolarityConfidence.innerHTML = trim(data.polarity_confidence, 2);
      textSubjectivityConfidence.innerHTML = trim(
        data.subjectivity_confidence,
        2
      );
    });
}

export { handleUserTextInput };
