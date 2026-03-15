function convertUnit() {
  const inputValue = document.getElementById("inputValue").value;
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  const resultElement = document.getElementById("result");

  const conversionRates = {
    km: 1000000, // millimeters in a kilometer
    m: 1000, // millimeters in a meter
    cm: 10, // millimeters in a centimeter
    mm: 1 // millimeter is the base unit
  };

  if (inputValue === "") {
    resultElement.textContent = 0;
    return;
  }

  // Convert input value to millimeters
  const valueInMM = inputValue * conversionRates[inputUnit];

  // Convert from millimeters to the output unit
  const outputValue = valueInMM / conversionRates[outputUnit];

  resultElement.textContent = outputValue;
}
