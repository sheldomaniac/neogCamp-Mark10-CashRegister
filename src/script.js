var inputBillAmount = document.querySelector("#bill-amount");
var inputBillAmountButton = document.querySelector("#inputBillAmountButton");
var userAmount = document.querySelector("#user-amount");
var userAmountButton = document.querySelector("#userAmountButton");
var statusMessage = document.getElementById("statusMessage");
var returnAmount = document.querySelectorAll(".return-amount");
var inputBillAmountWindow = document.querySelector("#input-bill-amount-window");
var tableCalculator = document.querySelector("#table-calculator");

var conversionArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var conversionArrayLength = conversionArray.length;

function nilArray(){
    for(let i = 0; i < conversionArrayLength; i++)returnAmount[i].innerHTML = 0;
}


function displayMessage(message){
    statusMessage.style.display="block";
    statusMessage.innerHTML = message;
}

function hideMessage(){
    statusMessage.style.display="none";
}

hideMessage();
inputBillAmountWindow.style.display="none";

inputBillAmountButton.addEventListener("click",function validateInputAmount(){
    
    if(inputBillAmount.value > 0){

        message = "Your bill is correct. Input the cash received."
        displayMessage(message);
        statusMessage.classList.remove("error-msg");
        statusMessage.classList.add("success-msg");
        inputBillAmountWindow.style.display="block";
        tableCalculator.style.display="none";

        userAmountButton.addEventListener("click",function billOutput(){
            
            if(userAmount.value >= inputBillAmount.value && userAmount.value>0){
                message = "Here are the bills to be given to the customer. Thank you."
                displayMessage(message);
                statusMessage.classList.remove("error-msg");
                statusMessage.classList.add("success-msg");
                tableCalculator.style.display="block";

                var amount = userAmount.value - inputBillAmount.value;
                for(let i = 0; i < conversionArrayLength; i++){
                    returnAmount[i].innerHTML = Math.trunc(amount / conversionArray[i]);
                    amount = amount % conversionArray[i];
                }
            }else{
                nilArray();
                message = "Cash given should be greater than bill amount";
                displayMessage(message);
                statusMessage.classList.remove("success-msg");
                statusMessage.classList.add("error-msg");
            } 
        })
               
    }else{
        nilArray();
        message = "Invalid Amount";
        displayMessage(message);
        statusMessage.classList.remove("success-msg");
        statusMessage.classList.add("error-msg");
    }
});


