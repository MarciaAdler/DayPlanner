// global variables
// var saveButton = document.querySelectorAll('button');




$(document).ready(function() {
    var hours =["9","10","11","12","1","2","3","4","5"];
    //$('.activity-input').each(function(){
    for (let i = 0; i < hours.length; i++) {
        
        
    
           
           
           var index = $('.activity-input').attr('data-index');
           console.log(index);
           var text = hours[index];
           var input = $(`#${text}`);
           localStorage.getItem(index);
           console.log(localStorage.getItem(index))
        }        
        
    var getItem = localStorage.getItem('0');
    console.log(getItem);
   
// display current date
    var newDate = new Date();
    $('#date').text(newDate.toDateString());
    console.log(newDate);
    // loop through all the hours and assign an index to the save button
   
     $('.save-button').each(function(){
         $(this).on('click',function(){
            event.preventDefault();
            var element = event.target;
            //var index = element.getAttribute('data-index');
            var index = $(element).attr('data-index');
            var text = hours[index];
            var input = $(`#${text}`);
            localStorage.setItem(index, (input.val()));
            
         })
         

     })
        
    //     $('button').addClass('save-button');
    //     console.log(hours[i])
    //     console.log(i)
    //     }
    // $('.save-button').on('click',function(event){
    //     event.preventDefault();
    //     //save input from text area to local storage
           
    //     localStorage.setItem('data-index','.activity-input');     
    // })
// for (let i = 0; i < saveButton.length; i++) {
//     // submit input on clicking of save button
//     saveButton[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var element = event.target;
//             var index = element.getAttribute('data-index');
//             var text = hours[index];
//             console.log(text);
//             var input = document.getElementById(text);
//             // store input to local storage
//             window.localStorage.setItem(index, (input.value));
            
//              event.preventDefault();
     
//              console.log(index);     
//    })        
//  }      

// color code calendar
})