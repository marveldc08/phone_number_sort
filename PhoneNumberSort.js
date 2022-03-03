function sortNumber(){
    var rawNumbers = document.getElementById("output").value;
    //rawNumbers += ``; 
    var arrayOfNumbers = [];
    arrayOfNumbers = rawNumbers.split(",");
    var invalidPhoneNumbers = [];
    var validPhoneNumbers = [];
    
    var phoneNumberProvider = {
        _9mobile : {
            providerName : "",
            arrayofphoneNumber : []
        },
        airtel : {
            providerName : "",
            arrayofphoneNumber : []
        },
        glo : {
            providerName : "",
            arrayofphoneNumber : []
        },
        mtn : {
            providerName : "",
            arrayofphoneNumber : []
        } 
    }
    
    var arrayOfValidNumberPrefix = [
        "0809","0817","0818","0909","0908",
        "0701","0708","0802","0808","0812","0901","0902","0904","0907","0912",
        "0705","0805","0807","0811","0815","0905","0915",
        "0702","0703","0704","0706","0803","0806","0810","0813","0814","0816","0903","0906","0913","0916"
    ];
    
    arrayOf9MobilePrefix =["0809","0817","0818","0908","0909"];
    arrayOfAirtelPrefix = ["0701","0708","0802","0808","0812","0901","0902","0904","0907","0912"];
    arrayOfGloPrefix = ["0705","0805","0807","0811","0815","0905","0915"];
    arrayOfMtnPrefix = ["0702","0703","0704","0706","0803","0806","0810","0813","0814","0816","0903","0906","0913","0916"];

    //function for sorting numbers
    var lengthOfArray = arrayOfNumbers.length;
    //console.log(lengthOfArray);
    for (var index = 0; index < lengthOfArray; index++) {
        var secondValidity = arrayOfNumbers[index];
        var numberPrefix = secondValidity.slice(0,4);

            if (arrayOfNumbers[index].length === 11) {

                var isValidNumberPrefix = checkAvalability(arrayOfValidNumberPrefix, numberPrefix);


                if(isValidNumberPrefix === true) {
                    validPhoneNumbers.push(secondValidity); 
                    //console.log(validPhoneNumbers.lenght);
                } else {
                    invalidPhoneNumbers.push(secondValidity);
                }  
                
                var is9mobileNumberPrefix = checkAvalability(arrayOf9MobilePrefix, numberPrefix);

                var isAirtelNumberPrefix = checkAvalability(arrayOfAirtelPrefix, numberPrefix);

                var isGloNumberPrefix = checkAvalability(arrayOfGloPrefix, numberPrefix);

                var isMtnNumberPrefix = checkAvalability(arrayOfMtnPrefix, numberPrefix);

                if(isMtnNumberPrefix === true){
                    phoneNumberProvider.mtn.providerName = "MTN";
                    phoneNumberProvider.mtn.arrayofphoneNumber.push(secondValidity);
                    
                }else if(isAirtelNumberPrefix === true){
                    phoneNumberProvider.airtel.providerName = "Airtel";
                    phoneNumberProvider.airtel.arrayofphoneNumber.push(secondValidity);

                } else if(isGloNumberPrefix === true){
                    phoneNumberProvider.glo.providerName = "Glo";
                    phoneNumberProvider.glo.arrayofphoneNumber.push(secondValidity);

                } else if(is9mobileNumberPrefix === true){
                    phoneNumberProvider._9mobile.providerName = "9Mobile";
                    phoneNumberProvider._9mobile.arrayofphoneNumber.push(secondValidity);

                };
                
            } else {
                invalidPhoneNumbers.push(secondValidity);
                
            }

    }
    //function for displaying invalid output
    if (rawNumbers === ``) {
        alert("You have not selected a file.");
    }else{ 
        var displayOutputHeading = document.getElementById("invalidHeading");
        var heading = `<h4>`+
                            "List of invalid Phone Numbers" +
                      `</h4>`;
            $("#invalidHeading").addClass("invalidHeading");
            displayOutputHeading.innerHTML += heading;
    
        var displayOutput = document.getElementById("invalid");
        invalidPhoneNumbers.forEach(element => {
            var cancel_Icon = `<img src= "images/cancel_icon.png" class= "providerIcon">`;
            var paragraph = `<p>`+
                                cancel_Icon+ " " + `<b>` + element  + " is not a valid Phone number"+
                            `</p>`;
            displayOutput.innerHTML += paragraph; 
        });
    }
       



    //function for creating table content...
    var table = document.getElementById('tableBody');
    phoneNumberProvider.mtn.arrayofphoneNumber.forEach(element => {
        var mtnLogo = `<img src="images/mtn.png" class= "providerIcon">`;
        var row = `<tr>`+
                        `<td>`+ mtnLogo+ "  " + phoneNumberProvider.mtn.providerName + `</td>`+
                        `<td>`+ element + `<td>` +
                `</tr>`;
        table.innerHTML += row;
    });

    phoneNumberProvider.airtel.arrayofphoneNumber.forEach(element => {
        var airtelLogo = `<img src="images/airtel.png" class= "providerIcon">`;
        var row = `<tr>`+
                        `<td>`+ airtelLogo+ " " + phoneNumberProvider.airtel.providerName + `</td>`+
                        `<td>`+ element + `<td>` +
                `</tr>`;
        table.innerHTML += row;
    });

    phoneNumberProvider.glo.arrayofphoneNumber.forEach(element => {
        var gloLogo = `<img src="images/glo.jfif" class= "providerIcon">`;
        var row = `<tr>`+
                        `<td>`+ gloLogo+ "  " + phoneNumberProvider.glo.providerName + `</td>`+
                        `<td>`+ element + `<td>` +
                `</tr>`;
        table.innerHTML += row;
    });

    phoneNumberProvider._9mobile.arrayofphoneNumber.forEach(element => {
        var _9mobileLogo = `<img src="images/9mobile.jpg" class= "providerIcon">`;
        var row = `<tr>`+
                        `<td>`+ _9mobileLogo+ "  " + phoneNumberProvider._9mobile.providerName + `</td>`+
                        `<td>`+ element + `<td>` +
                `</tr>`;
        table.innerHTML += row;
    });
    

    
    if(invalidPhoneNumbers.length === 0 ){
        document.getElementById("numberOfInvalid").innerHTML = `<i>` +"No invalid Phone number on the list"
    }else if (invalidPhoneNumbers.length === 1 ) {
        document.getElementById("numberOfInvalid").innerHTML = `<i>` + "There is "+invalidPhoneNumbers.length +
        " invalid Phone Number on the list.";
    } else{
        document.getElementById("numberOfInvalid").innerHTML = `<i>` + "There are " +invalidPhoneNumbers.length +
        " invalid Phone Numbers on the list.";
    }

    if (validPhoneNumbers.length === 0 ) {
        document.getElementById("numberOfValid").innerHTML = `<i>` + "No valid Phone Numbers on the table.";
    } else if (validPhoneNumbers.length === 1) {
        document.getElementById("numberOfValid").innerHTML = `<i>` + "There is " +validPhoneNumbers.length + 
        " valid Phone Number on the table.";
    }else {
        document.getElementById("numberOfValid").innerHTML = `<i>` + "There are " +validPhoneNumbers.length + 
        " valid Phone Numbers on the table.";
    }
    
   
    console.log(lengthOfArray);
    console.log(invalidPhoneNumbers.length);
    console.log(validPhoneNumbers.length);
 
}

//function for validating number prefix
function checkAvalability(arrayToCheck, searchValue){
    return arrayToCheck.some( function (arrayValues){
        return searchValue === arrayValues;
    });
}


/* //carousel function
$(document).ready(function () {
    // Activate Carousel with a specified interval
  $("#myCarousel").carousel({interval: 500, pause:false});
    //activate carousel
    $("#carouselDisplay").carousel();

    //activate carousel indicators
    $("item0").click(function(){
        $("#carouselDisplay").carousel(0);
    });
    $("item1").click(function(){
        $("#carouselDisplay").carousel(1);
    });
    $("item2").click(function(){
        $("#carouselDisplay").carousel(2);
    });

    //activate carousel control
    $(".carousel-control-prev").click(function(){
        $("#carouselDisplay").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#carouselDisplay").carousel("next");
    });
});
 */
