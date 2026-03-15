const input = document.getElementById("pound");
const result = document.getElementById("kg");

input.addEventListener("input", function () {

    const pounds = input.value;

    const kg = pounds * 0.453592;

    result.textContent = kg.toFixed(2);

});