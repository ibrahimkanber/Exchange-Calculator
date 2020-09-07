const exchangeRate = fetch("https://api.exchangeratesapi.io/latest");
const selectLeft = document.getElementById("selectLeft");
const selectRight = document.getElementById("selectRight")
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

input1.addEventListener("change", () => {
    var rate = selectRight.value / selectLeft.value
    console.log(rate * input1.value);
    input2.value = rate * input1.value
})

selectLeft.addEventListener("change", () => {
    var rate = selectRight.value / selectLeft.value
    console.log(rate * input1.value);
    input2.value = rate * input1.value

})

selectRight.addEventListener("change", () => {
    var rate = selectRight.value / selectLeft.value
    console.log(rate * input1.value)
    input2.value = rate * input1.value


})




exchangeRate.then(res => res.json()).then(res => {
    let html = "";
    for (let money in res.rates) {
        html += `<option value='${res.rates[money]}'>${money}</option>`
    };
    selectLeft.innerHTML = html;
    selectRight.innerHTML = html;

})