function calc() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // Convert height to meters
    let bmi = (weight) / (height * height);
    document.getElementById("result").innerHTML = bmi;
}