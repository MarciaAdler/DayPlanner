// global variables
var hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
var planner = document.querySelector('.planner');
var inputs = [];


// display current date
    

    planner.innerHTML=""
    // create input with label and button
for (let i = 0; i < hours.length; i++) {
    var newHour = $('<label>');
    newHour.attr('class','hour');
    newHour.text(hours[i]);
    var inputField = document.createElement("input");
    inputField.textContext = "";
    inputField.setAttribute("class","input");
    var completeButton = document.createElement("button")
    completeButton.textContent = "Complete"
    completeButton.setAttribute('class','button');
    newHour.append(inputField);
    newHour.append(completeButton); 
    $('.planner').append(newHour);
    
    }
    



// store input to local storage




   
 
// // submit input

// color code calendar
