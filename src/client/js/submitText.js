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
    .then(res => {
      console.log(
        "Back to handleUserTextInput(event) after receiving response from Aylien API."
      );

      console.log("Response received: ");
      console.log(res);

      // console.log("Text value received");
      // console.log(`🚀: handleUserTextInput -> textValue : `, textValue);
      res.json();
    })
    .then(data => {
      console.log(
        "Back to handleUserTextInput(event) after receiving response from Aylien API."
      );

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
      textPolarity.innerHTML = data.polarity;
      textSubjectivity.innerHTML = data.subjectivity;
      textPolarityConfidence.innerHTML = data.polarity_confidence;
      textSubjectivityConfidence.innerHTML = data.subjectivity_confidence;
    });
}

export { handleUserTextInput };
