let calculation = localStorage.getItem('calculation') || '';

displayCalculation();


  

function updateCalculation(value) {
  if(value == ' = ') {
    calculation = eval(calculation);
    console.log(calculation)
  }else {
    calculation += value;
    console.log(calculation)
  }
  displayCalculation();
  
  localStorage.setItem('calculation',calculation);
}

function displayCalculation() {
  let paraElement = 
  document.querySelector('.js-calculation');
  paraElement.innerHTML = calculation;
}