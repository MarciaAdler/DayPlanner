// global variables
var saveButton = document. querySelectorAll('.save-button')


    


var hours =["nine-am-text", "ten-am-text", "eleven-am-text", "twelve-pm-text", "one-pm-text", "two-pm-text", "three-pm-text", "four-pm-text", "five-pm-text"];

// display current date
for (let i = 0; i < saveButton.length; i++) {  
    saveButton[i].addEventListener('click',function(event){
        
         
       
    
        event.preventDefault();
        var element = event.target;
            var index = element.getAttribute('data-index');
            var text = hours[index];
            var input = document.getElementById(text);
            window.localStorage.setItem(index, (input.value));
            
            event.preventDefault();
     
            console.log(index);
                
    })        
}      



// store input to local storage




   
 
// // submit input

// color code calendar
