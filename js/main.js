var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elFizzText = document.querySelector(".fizz-text")
var elFizzBuzzText = document.querySelector(".f-b-text")
var elBuzzText = document.querySelector(".buzz-text")

elFizzText.textContent = [];

console.log(elFizzText);
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValue = Number(elInput.value.trim());
    
    var newArrFizz = [];
    var newArrFizzBuzz = [];
    var newArrBuzz = [];
    
    
    if(elInputValue % 3 == 0) {
        newArrFizz.push(elInputValue);
        elFizzText.innerHTML += newArrFizz + ",";
    }
    
    if(elInputValue % 5 == 0) {
        newArrBuzz.push(elInputValue);
        elBuzzText.innerHTML += newArrBuzz + ",";
    }
    
    if(elInputValue % 15 == 0) {
        newArrFizzBuzz.push(elInputValue);
        elFizzBuzzText.innerHTML += newArrFizzBuzz + ",";
    }
})