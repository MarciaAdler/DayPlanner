// global variables
var saveButton = document.querySelectorAll('.save-button')
var hours =["nine-am-text", "ten-am-text", "eleven-am-text", "twelve-pm-text", "one-pm-text", "two-pm-text", "three-pm-text", "four-pm-text", "five-pm-text"];

// display current date

// cycle through all the hours to save any input to the correct hour (index)
for (let i = 0; i < saveButton.length; i++) {
    // submit input on clicking of save button
    saveButton[i].addEventListener('click',function(event){
        event.preventDefault();
        var element = event.target;
            var index = element.getAttribute('data-index');
            var text = hours[index];
            var input = document.getElementById(text);
            // store input to local storage
            window.localStorage.setItem(index, (input.value));
            
            event.preventDefault();
     
            console.log(index);     
    })        
}      

// color code calendar
