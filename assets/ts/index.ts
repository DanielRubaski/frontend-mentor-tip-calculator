const billInput =  document.getElementById("bill") as HTMLInputElement;
const customInput = document.getElementById("tip-custom") as HTMLInputElement;
const peopleInput = document.getElementById("people") as HTMLInputElement;
const tipAmountOutput = document.getElementById("tip-amount") as HTMLElement;
const totalOutput = document.getElementById("total-amount") as HTMLElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const tipRadios = document.querySelectorAll('input[name="tip"]') as NodeListOf<HTMLInputElement>;

function calculateTip() {
    const bill= parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if(people === 0){
        peopleInput.parentElement?.classList.add("error-active");
        return;
    } else {
        peopleInput.parentElement?.classList.remove("error-active");
    }

    if (bill <= 0 || people <= 0) {
        return;
    }

    let tipPercentage = 0;
    const selectedTip = document.querySelector('input[name="tip"]:checked') as HTMLInputElement;

    if (selectedTip) {
        tipPercentage = parseFloat(selectedTip.value);
    }else if (customInput.value) {
        tipPercentage = parseFloat(customInput.value);
    }


    const tipPerson = (bill * (tipPercentage / 100)) / people;
    const totalPerson = (bill / people) + tipPerson;

    tipAmountOutput.textContent = "$" + tipPerson.toFixed(2);
    totalOutput.textContent = "$" + totalPerson.toFixed(2);
 
}

function resetarCalculadora() {
    billInput.value = "";
    customInput.value = "";
    peopleInput.value = "";

    tipRadios.forEach(function(radio) {
        radio.checked = false;
    });

    tipAmountOutput.textContent = "$0.00";
    totalOutput.textContent = "$0.00";
    peopleInput.parentElement?.classList.remove("error-active");
}

billInput.addEventListener("input", calculateTip);
customInput.addEventListener("input", function() {
    tipRadios.forEach(function(rdaio){
        rdaio.checked = false;
    });
});
peopleInput.addEventListener("input", calculateTip); 
tipRadios.forEach(radio => {
    radio.addEventListener("change", calculateTip);
});

btnReset.addEventListener("click", resetarCalculadora);


