{

    const formElement = document.querySelector(".js-form");
    const button = document.querySelector(".js-button");
    const calculationDate = document.querySelector(".js-calculationDate");
    const plnValue = document.querySelector(".js-plnValue");

    function init() {
        const today = new Date();
        calculationDate.value = today.toISOString().slice(0, 10);
        plnValue.value = 100.00;
        calculationDate.setAttribute("max", calculationDate.value);
        console.log(plnValue.value);
        console.log(calculationDate.value);
        console.log(plnValue.value);
        convertRates(plnValue.value, calculationDate.value);
    }

    const exchangeRate = (currency, calculationDate) => {
     // fumkcja ma pobierać kursy walut z NBP na dany dzień. Dziś jeszcze nie umiem  tego zrobić
        switch (currency) {
            case "EUR":
                return 4.7363 + calculationDate.slice(9, 10) / 15;
            case "USD":
                return 4.4003 + calculationDate.slice(9, 10) / 15;
            case "CHF":
                return 4.7912 + calculationDate.slice(9, 10) / 15;
            case "GBP":
                return 5.3427 + calculationDate.slice(9, 10) / 15;
            default:
                return 0;
        }
    }

    const convertRate = (plnValue, calculationDate, currency) => {
        const classNameRate = ".js-" + currency.toLowerCase() + "Rate";
        const classNameValue = ".js-" + currency.toLowerCase() + "Value";
        const currencyRate = document.querySelector(classNameRate);
        const currencyValue = document.querySelector(classNameValue);
        currencyRate.value = Math.ceil(exchangeRate(currency, calculationDate) * 10000) / 10000;
        currencyValue.value = Math.ceil(currencyRate.value * plnValue * 100 - 0.5) / 100;
    }

    const convertRates = (plnValue, calculationDate) => {
        convertRate(plnValue, calculationDate, "EUR");
        convertRate(plnValue, calculationDate, "USD");
        convertRate(plnValue, calculationDate, "CHF");
        convertRate(plnValue, calculationDate, "GBP");
    }

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    button.addEventListener("click", () => {
        convertRates(plnValue.value, calculationDate.value);
    })

    init();
}