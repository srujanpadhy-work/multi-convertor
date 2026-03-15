const exchangeRates = {
    USD: { EUR: 0.91, JPY: 147.52, GBP: 0.82, AUD: 1.55, INR: 83.09, PKR: 276.55, USD: 1 },
    EUR: { USD: 1.10, JPY: 162.24, GBP: 0.90, AUD: 1.71, INR: 91.13, PKR: 303.59, EUR: 1 },
    JPY: { USD: 0.0068, EUR: 0.0062, GBP: 0.0055, AUD: 0.0106, INR: 0.56, PKR: 1.87, JPY: 1 },
    GBP: { USD: 1.22, EUR: 1.11, JPY: 182.62, AUD: 2.02, INR: 111.38, PKR: 366.53, GBP: 1 },
    AUD: { USD: 0.65, EUR: 0.58, JPY: 94.07, GBP: 0.50, INR: 64.92, PKR: 214.55, AUD: 1 },
    INR: { USD: 0.012, EUR: 0.011, JPY: 1.78, GBP: 0.009, AUD: 0.015, PKR: 3.31, INR: 1 },
    PKR: { USD: 0.0036, EUR: 0.0033, JPY: 0.53, GBP: 0.0027, AUD: 0.0047, INR: 0.30, PKR: 1 }
};

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
        document.getElementById('result').textContent = 'Conversion rate not available.';
        return;
    }

    const result = amount * rate;
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;
}
