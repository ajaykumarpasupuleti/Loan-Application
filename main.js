const amount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const months = document.getElementById('months-to-pay');
const calculateButton = document.getElementById('button');
const resultContainer = document.getElementById('result');

calculateButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(!amount.value || !interestRate.value || !months.value){
    alert('please enter all the required values');
    return;
  }

  const rateOfInterestPerAnnum = interestRate.value / 12 / 100;

  const emi = Math.round((amount.value * rateOfInterestPerAnnum * (Math.pow(1 + rateOfInterestPerAnnum, months.value))) / (Math.pow(1 + rateOfInterestPerAnnum, months.value) - 1))

  const totalInterestPayable = Math.round(emi * months.value - amount.value);

  resultContainer.innerHTML = `<p>Your Monthly Loan EMI : ${emi}</p> <br> <p>Total Interest Payable :  ${totalInterestPayable}</p> <br> <p>Total Amount Payable : ${emi * months.value}</p>`;
});