// function for get input form input feild
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountString = inputField.value;
    const inputAmountValue = parseFloat(inputAmountString);
    // clear field
    inputField.value = "";
    return inputAmountValue;
};
// function for total deposit and withdraw field
function depositAndWithdrawTotalField(totalFieldId, inputAmountValue) {
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const previousTotal = parseFloat(totalFieldText);
    totalField.innerText = previousTotal + inputAmountValue;
};
// update balance deposit and withdraw 
function updateBalance(inputAmountValue, isAdd) {
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);

    if (isAdd == true) {
        totalBalance.innerText = totalBalanceNumber + inputAmountValue;
    }
    else {
        totalBalance.innerText = totalBalanceNumber - inputAmountValue;
    }
};
// current balance 
function currentBalance() {
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceText);
    return totalBalanceNumber;
}
// deposit button event handler 
document.getElementById('depositButton').addEventListener('click', function () {

    const depositInput = getInputValue('depositInput');
    if (depositInput > 0) {
        const totalDeposit = depositAndWithdrawTotalField('totalDeposit', depositInput);
        updateBalance(depositInput, true);
    }
});

// withdraw button event handle
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawInput = getInputValue('withdrawInput');
    const presentBalance = currentBalance();
    if (withdrawInput > 0 && withdrawInput < presentBalance) {
        const totalWithdraw = depositAndWithdrawTotalField('totalWithdraw', withdrawInput);
        updateBalance(withdrawInput, false);
    }
    else {
        console.log('you cannot withdraw more than you have  in your account and a negative value')
    }
});