const exchangeRate = fetch("https://api.exchangeratesapi.io/latest");
const selectLeft = document.getElementById("selectLeft");
const selectRight = document.getElementById("selectRight")
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");




var euro;

let rateCalculator = () => {
    if (selectLeft.value == "euro" && selectRight.value != "euro") {
        var rate = selectRight.value;
        input2.value = rate * input1.value;
    } else if (selectLeft.value == "euro" && selectRight.value == "euro") {
        var rate = 1;
        input2.value = rate * input1.value;
    } else if (selectLeft.value !== "euro" && selectRight.value == "euro") {
        var rate = 1 / selectLeft.value;
        input2.value = rate * input1.value;
    } else {
        var rate = (selectRight.value) / selectLeft.value
        console.log(rate * input1.value)
        input2.value = rate * input1.value
    }

}

input1.addEventListener("input", rateCalculator)

selectLeft.addEventListener("change", rateCalculator)

selectRight.addEventListener("change", rateCalculator)


exchangeRate.then(res => res.json()).then(res => {
    let html = "<option value='euro'>EUR</option>";
    for (let money in res.rates) {
        html += `<option value='${res.rates[money]}'>${money}</option>`
    };
    console.log(res)
    selectLeft.innerHTML = html;
    selectRight.innerHTML = html;

})