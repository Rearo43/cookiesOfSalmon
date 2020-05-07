'use strict';
/// Ask question: is there a way to do this shotter + so you can have the holiday hours ready and just run the code when the times right?
var hours = ['6am','7am','8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/// STORE DATA A-Z


function inputStoreData(name, min, max, avgCookie) {
  this.name = name;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCookieEchPerson = avgCookie;
  this.cookieEchHr = [];
  this.customerEchHr = [];
  this.cookiesPerDay = 0;
}

inputStoreData.prototype.calcCustomerEchHr = function(){
  for(var i=0; i<hours.length; i++){
    var custThisHr = getRandomNumber(this.minCustomer, this.maxCustomer);

    this.customerEchHr.push(custThisHr);

  }
};

inputStoreData.prototype.calcCookieEchHr = function(){
  this.calcCustomerEchHr();
  for(var i=0; i<this.customerEchHr.length; i++){
    var fullcookiesEchHr = Math.ceil(this.customerEchHr[i] * this.avgCookieEchPerson);
    // console.log('this is customers each hour', this.calcCustomerEchHr());
    // console.log('this is avg cookies per customer', this.avgCookieEchPerson);

    this.cookieEchHr.push(fullcookiesEchHr);
  }
};

inputStoreData.prototype.totalCookiesSoldDay = function(){
  this.calcCookieEchHr();
  for(var i=0; i<this.cookieEchHr.length; i++){
    this.cookiesPerDay += this.cookieEchHr[i];

    console.log('this is our cookies each hour', this.cookieEchHr[i]);
  }
  return this.cookiesPerDay;

};

inputStoreData.prototype.render = function(){
  this.totalCookiesSoldDay();
  console.log(this.cookiesPerDay);
  var parentElement = document.getElementById('tableOfSales');
  var tableRowPE = document.createElement('tr');
  var tableHeader = document.createElement('th');

  tableHeader.textContent = this.name;
  tableRowPE.appendChild(tableHeader);
  for(var i=0; i<this.cookieEchHr.length; i++){
    var anHrCookies = document.createElement('td');
    anHrCookies.textContent = this.cookieEchHr[i];
    tableRowPE.appendChild(anHrCookies);
  }
  var anHrCookies2 = document.createElement('td');
  anHrCookies2.textContent = this.cookiesPerDay;
  tableRowPE.appendChild(anHrCookies2);
  parentElement.appendChild(tableRowPE);
};





function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dubai = new inputStoreData('DUBAI', 11, 38, 3.7);
var lima = new inputStoreData('LIMA', 2, 16, 4.6);
var paris = new inputStoreData('PARIS', 20, 38, 2.3);
var seattle = new inputStoreData('SEATTLE', 23, 65, 6.3);
var tokyo = new inputStoreData('TOKYO', 3, 24, 1.2);

dubai.render();
lima.render();
paris.render();
seattle.render();
tokyo.render();


/// Slides of Pictures


