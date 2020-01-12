// global variables
var completeButton = document. querySelector('.complete-button');
var planner = document.querySelector('.planner');
var hours =["nine-am-text", "ten-am-text", "eleven-am-text", "twelve-pm-text", "one-pm-text", "two-pm-text", "three-pm-text", "four-pm-text", "five-pm-text"];



// display current date
    



completeButton.addEventListener("click",function(){
    event.preventDefault();
    // var textNineAm = document.getElementById('nine-am-text');
    // if (textNineAm !== "") {
    //     localStorage.setItem('input', (textNineAm.value));
    // }
    var element = event.target;
    
    var index = element.getAttribute('data-index');
    var text = hours[index];
    var input = document.getElementById(text);
    window.localStorage.setItem(index, (input.value));
    console.log(index)
  
})   



// store input to local storage




   
 
// // submit input

// color code calendar
