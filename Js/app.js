function updateProductNumber(product, prize, isIncreasing) {
    const productInput = document.getElementById(product + '-quantity');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else {
        if (productNumber > 0) {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    productInput.value = productNumber;
    // update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * prize;
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1259;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});