let totalPrice = 0; //Global variable for total price


document.getElementById('kitchen-one').addEventListener('click', function(){
    clickHandle('kitchen-one-price', 'kitchen-one-header');
})

document.getElementById('kitchen-two').addEventListener('click', function(){
    clickHandle('kitchen-two-price', 'kitchen-two-header');
})

document.getElementById('kitchen-three').addEventListener('click', function(){
    clickHandle('kitchen-three-price', 'kitchen-three-header');
})

document.getElementById('sport-one').addEventListener('click', function(){
    clickHandle('sport-one-price', 'sport-one-header');
})

document.getElementById('sport-two').addEventListener('click', function(){
    clickHandle('sport-two-price', 'sport-two-header');
})

document.getElementById('sport-three').addEventListener('click', function(){
    clickHandle('sport-three-price', 'sport-three-header');
})

// When click to "Go Home" button it deletes all the child element and restore the price section
document.getElementById('gohome-btn').addEventListener('click', function(){
    const parentElement = document.getElementById("purchase-entry");

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    document.getElementById("total-price").innerText = '00.00';
    document.getElementById("discount-price").innerText = '00.00';
    document.getElementById("final-price").innerText = '00.00';

    document.getElementById("purchase-button").setAttribute('disabled', 'true');
})

document.getElementById('coupon-btn').addEventListener('click', function(){
    const coupon = document.getElementById("coupon-input");
    const couponText = coupon.value;
    const totalPrice = document.getElementById("total-price").innerText;
    const totalPriceFloat = parseFloat(totalPrice);
    let discount = 0;

    if(couponText === 'SELL200'){
        discount = (totalPriceFloat * 0.2).toFixed(2);
    }
    else if(couponText !== 'SELL200'){
        alert('The coupon code is invalid');
    }

    setTotalPrice('discount-price', discount);

    const totalFinalPrice = totalPriceFloat - discount;

    setTotalPrice('final-price', totalFinalPrice);

    coupon.value = '';
})

function clickHandle(idOne, idTwo){
    totalPrice = getPriceById(idOne);
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry(idTwo);
    makePurchaseEnable();
}

function getPriceById(id){
    const price = document.getElementById(id).innerText;
    const priceFloat = parseFloat(price);
    const totalNow = parseFloat(document.getElementById("total-price").innerText);
    const finalPrice = (totalNow + priceFloat).toFixed(2);
    if(finalPrice >= 200){
        document.getElementById("coupon-btn").removeAttribute('disabled');
    }
    return finalPrice;
}

function setTotalPrice(id, value){
    const total = document.getElementById(id);
    total.innerText = value;
}

function purchaseListEntry(id){
    const title = document.getElementById(id).innerText;
    const purchaseList = document.getElementById("purchase-entry");

    const count = purchaseList.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${title} `;
    purchaseList.appendChild(p);
}

function makePurchaseEnable(){
    const purchaseButton = document.getElementById("purchase-button");
    purchaseButton.removeAttribute('disabled');
}

