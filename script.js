"use strict"

var inputVardas = document.getElementById('inputVardas');
var inputPavardė = document.getElementById('inputPavardė');
var inputAmžius = document.getElementById('inputAmžius');


  function pridėti(){
    if((inputVardas.value <=0) || (inputPavardė.value <=0) || (inputAmžius.value >= 0)){
      var table = document.getElementById('table');
      var tr = document.createElement('tr');
      table.append(tr);
      tr.className = 'row';
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      td1.innerHTML = inputVardas.value;
      td2.innerHTML = inputPavardė.value;
      td3.innerHTML = inputAmžius.value;
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      inputVardas.value = "";
      inputPavardė.value = "";
      inputAmžius.value = "";
    } else {
      alert('Įveskite vardą, pavardę ir amžių')
    }
  };

  // function ištrintiPaskutinį(){
  //   var removeTr = document.getElementsByClassName('row');
  //   if(removeTr.length){
  //     removeTr[removeTr.length - 1].remove();
  //   } else{
  //     alert("Nieko nebera");
  //   }
  // };

  // function ištrintiPirmą(){
  //   var removeTr = document.getElementsByClassName('row');
  //   if(removeTr.length){
  //     removeTr[0].remove();
  //   } else{
  //     alert("Nieko nebera");
  //   }
  // };
