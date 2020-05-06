'use strict'
/// Ask question: is there a way to do this shotter + so you can have the holiday hours ready and just run the code when the times right?
var hours = ['6am','7am','8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/// STORE DATA A-Z

var dubai = new inputStoreData('DUBAI', 11, 38, 3.7)
var lima = new inputStoreData('LIMA', 2, 16, 4.6)
var paris = new inputStoreData('PARIS', 20, 38, 2.3)
var seattle = new inputStoreData('SEATTLE', 23, 65, 6.3)
var tokyo = new inputStoreData('TOKYO', 3, 24, 1.2)

function inputStoreData(name, min, max, avgCookie,) {
    this.store = name;
    this.minCustomer = min;
    this.maxCustomer = max;
    this.avgCookieEchPerson = avgCookie;
    this.cookieEchHr = [];
    this.customerEchHr = [];
    this.totalCookiesSoldDay = 0;
}

    inputStoreData.prototype.calcCustEchHour = function(){
        for(var i=0; i<hours.length; i++){
            var custThisHour = getRandomNumber(this.minCustomer, this.maxCustomer);

            this.CustomerEchHr.push(custThisHour);
        }
    },

    inputStoreData.prototype.calcCookieEchHr = function(){
        for(var i=0; i<this.custPerHour.length; i++){
            var fullcookiesEchHr = Math.ceil(this.customerEchHour * this.avgCookieEchPerson);
            
            this.CustEchHour.push(fullcookiesEchHour);
        }
    }

    inputStoreData.prototype.render = function(){

        this.calcCustEchHour();
        this.calcCookiePerHr();

        var parentElement = document.getElementById('tableOfSales');
        var tableRow = document.createElement('tr')

    for(var i=0; i<hours.length; i++){
            var anHrCookies = document.createElement('td');
            anHrCookies.textContent = this.cookieEchHr[i];
            tableRow.appendChild(anHourCookies);
        }
    
        parentElement.appendChild(tableRow)
    },



dubai.render();
lima.render();
parse.render();
seattle.render();
tokyo.render();
    
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


