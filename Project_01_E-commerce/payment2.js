let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.creditCard-details');

function doFun(){
    tColorA.style.color = "#f01818";
    tColorB.style.color = "#444";
    tColorC.style.color = "#444";
    iconA.style.color = "#f01818";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "block";
}

function doFunA(){
    tColorA.style.color = "#444";
    tColorB.style.color = "#f01818";
    tColorC.style.color = "#444";
    iconA.style.color = "#aaa";
    iconB.style.color = "#f01818";
    iconC.style.color = "#aaa";
    cDetails.style.display = "none";
}
function doFunB(){
    tColorA.style.color = "#444";
    tColorB.style.color = "#444";
    tColorC.style.color = "#f01818";
    iconA.style.color = "#aaa";
    iconB.style.color = "#aaa";
    iconC.style.color = "#f01818";
    cDetails.style.display = "none";
}

let cNumber = document.getElementById('creditCard-number');
cNumber.addEventListener('keyup', function(e){
    let num = cNumber.value;

    let newValue = '';
    num = num.replace(/\s/g, '');
    for(var i = 0; i < num.length; i++){
        if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
        newValue = newValue.concat(num[i]);
        cNumber.value = newValue;
    }

    let ccNum = document.getElementById('c-number');
    if(num.length<16){
        ccNum.style.border = "1px solid red";
    }else{
        ccNum.style.border = "1px solid #f01818";
    }
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function(e){

    let newInput = eDate.value;

    if(e.key !== 'Backspace') {
        var numChars = e.target.value.length;
        if(numChars == 2) {
            var thisVal = e.target.value;
            thisVal += '/';
            e.target.value = thisVal;
            console.log(thisVal.length);
        }
    }

    if(newInput.length < 5){
        eDate.style.border = "1px solid red";
    } else {
        eDate.style.border = "1px solid #f01818";
    }
});

let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){

    let elen = cvv.value;
    let cvvBox = document.getElementById('cvv-box');
    if(elen.length<3){
        cvvBox.style.border="1px solid red";
    }else{
        cvvBox.style.border="1px solid #f01818";
    }
});