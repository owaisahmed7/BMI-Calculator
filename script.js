function calculate() {
    let weight = parseFloat(document.getElementById('zamaweight').value);
    let height = parseFloat(document.getElementById('zamaheight').value);
    let resultelement = document.getElementById("result");
    let errorelement = document.getElementById("error");

    if (isNaN(weight) || isNaN(height)) {
        errorelement.innerHTML = "Please enter the correct data.";
        resultelement.innerHTML = "";
    } else {
        let bmi = weight / (height * height);
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal Weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        resultelement.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
        errorelement.innerHTML = "";
        console.log(bmi);
    }
    console.log("Calculate function called");
}