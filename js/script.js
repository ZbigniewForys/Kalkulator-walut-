let formElement = document.querySelector(".js-form");
let date = document.querySelector(".js-date");
let button = document.querySelector(".js-button");
let eurRate = document.querySelector(".js-eurRate");
let usdRate = document.querySelector(".js-usdRate");
let chfRate = document.querySelector(".js-chfRate");
let gbpRate = document.querySelector(".js-gbpRate");
let plnValue = document.querySelector(".js-plnValue");
let eurValue = document.querySelector(".js-eurValue");
let usdValue = document.querySelector(".js-usdValue");
let chfValue = document.querySelector(".js-chfValue");
let gbpValue = document.querySelector(".js-gbpValue");

let today = new Date();
date.value = today.toISOString().slice(0, 10);
date.setAttribute("max", date.value);
plnValue.value = 100.00;
console.log(date.value);
convertRates(date);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

button.addEventListener("click", () => {
    convertRates(today);
})

function convertRates() {
    eurRate.value = Math.ceil(exchangeRate("EUR") * 10000) / 10000;
    usdRate.value = Math.ceil(exchangeRate("USD") * 10000) / 10000;
    chfRate.value = Math.ceil(exchangeRate("CHF") * 10000) / 10000;
    gbpRate.value = Math.ceil(exchangeRate("GBP") * 10000) / 10000;

    eurValue.value = Math.ceil(eurRate.value * plnValue.value * 100 - 0.5) / 100;
    usdValue.value = Math.ceil(usdRate.value * plnValue.value * 100 - 0.5) / 100;
    chfValue.value = Math.ceil(chfRate.value * plnValue.value * 100 - 0.5) / 100;
    gbpValue.value = Math.ceil(gbpRate.value * plnValue.value * 100 - 0.5) / 100;
}

function exchangeRate(currency) {
    // fumkcja ma pobierać kursy walut z NBP na damny dzień. Dziś jeszcze nie umiem  tego zrobić
    switch (currency) {
        case "EUR":
            return 4.7363 + date.value.slice(9, 10) / 15;
        case "USD":
            return 4.4003 + date.value.slice(9, 10) / 15;
        case "CHF":
            return 4.7912 + date.value.slice(9, 10) / 15;
        case "GBP":
            return 5.3427 + date.value.slice(9, 10) / 15;
        default:
            return 0;
    }
}