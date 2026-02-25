var billInput = document.getElementById("bill");
var customInput = document.getElementById("tip-custom");
var peopleInput = document.getElementById("people");
var tipAmountOutput = document.getElementById("tip-amount");
var totalOutput = document.getElementById("total-amount");
var btnReset = document.getElementById("reset");
var tipRadios = document.querySelectorAll('input[name="tip"]');
function calculateTip() {
    var _a, _b;
    var bill = parseFloat(billInput.value);
    var people = parseInt(peopleInput.value);
    if (people === 0) {
        (_a = peopleInput.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("error-active");
        return;
    }
    else {
        (_b = peopleInput.parentElement) === null || _b === void 0 ? void 0 : _b.classList.remove("error-active");
    }
    if (bill <= 0 || people <= 0) {
        return;
    }
    var tipPercentage = 0;
    var selectedTip = document.querySelector('input[name="tip"]:checked');
    if (selectedTip) {
        tipPercentage = parseFloat(selectedTip.value);
    }
    else if (customInput.value) {
        tipPercentage = parseFloat(customInput.value);
    }
    var tipPerson = (bill * (tipPercentage / 100)) / people;
    var totalPerson = (bill / people) + tipPerson;
    tipAmountOutput.textContent = "$" + tipPerson.toFixed(2);
    totalOutput.textContent = "$" + totalPerson.toFixed(2);
}
function resetarCalculadora() {
    var _a;
    billInput.value = "";
    customInput.value = "";
    peopleInput.value = "";
    tipRadios.forEach(function (radio) {
        radio.checked = false;
    });
    tipAmountOutput.textContent = "$0.00";
    totalOutput.textContent = "$0.00";
    (_a = peopleInput.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove("error-active");
}
billInput.addEventListener("input", calculateTip);
customInput.addEventListener("input", function () {
    tipRadios.forEach(function (rdaio) {
        rdaio.checked = false;
    });
});
peopleInput.addEventListener("input", calculateTip);
tipRadios.forEach(function (radio) {
    radio.addEventListener("change", calculateTip);
});
btnReset.addEventListener("click", resetarCalculadora);
