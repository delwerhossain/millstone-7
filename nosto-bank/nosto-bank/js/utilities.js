function getInputFieldValueById(inputFieldId) {
  let inputField = document.getElementById(inputFieldId).value;
  document.getElementById(inputFieldId).value = "";
  return parseFloat(inputField);
}


function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId).innerText;
  return parseFloat(textElement);
}



function setTextElementValueById(elementId, newValue) {
document.getElementById(elementId).innerText = newValue;
}
