let totalPrice = 0;

document.getElementById('kitchen-one').addEventListener('click', function(){
    totalPrice = getPriceById('kitchen-one-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('kitchen-one-header');
    makePurchaseEnable();
})

document.getElementById('kitchen-two').addEventListener('click', function(){
    totalPrice = getPriceById('kitchen-two-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('kitchen-two-header');
    makePurchaseEnable();
})

document.getElementById('kitchen-three').addEventListener('click', function(){
    totalPrice = getPriceById('kitchen-three-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('kitchen-three-header');
    makePurchaseEnable();
})

document.getElementById('sport-one').addEventListener('click', function(){
    totalPrice = getPriceById('sport-one-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('sport-one-header');
    makePurchaseEnable();
})

document.getElementById('sport-two').addEventListener('click', function(){
    totalPrice = getPriceById('sport-two-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('sport-two-header');
    makePurchaseEnable();
})

document.getElementById('sport-three').addEventListener('click', function(){
    totalPrice = getPriceById('sport-three-price');
    setTotalPrice('total-price', totalPrice);
    purchaseListEntry('sport-three-header');
    makePurchaseEnable();
})

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

    setTotalPrice('discount-price', discount);

    const totalFinalPrice = totalPriceFloat - discount;

    setTotalPrice('final-price', totalFinalPrice);

    coupon.value = '';
})

function getPriceById(id){
    const price = document.getElementById(id);
    const priceFloat = parseFloat(price.innerText);
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

