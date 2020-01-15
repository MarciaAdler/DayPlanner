

$(document).ready(function() {
    // display current date
    $('#date').text(moment().format('dddd, MMM Do'))
    var hours =["9","10","11","12","1","2","3","4","5"];
    // pull array
    var getActivities = localStorage.getItem('activities');
    var parseActivities = JSON.parse(getActivities);
    inputs = parseActivities;
    // populate activity-input text-area with array values by id.
    if(localStorage !== '')
    for (let i = 0; i < parseActivities.length; i++) {
        console.log(parseActivities[i].timeOfDay);
        
        
        $('#'+hours[i]).val(parseActivities[i].title);
        console.log(parseActivities[i].title);
    }

    // loop through all the hours and assign an index to the save button
   
     $('.save-button').on('click',function(){
         
        event.preventDefault();
        // save all inputs on page
        // getting the value from the last button clicked data index value
        //var index = $(this).attr('data-index');
        // grabbing the value from the hours array using data-index from save button
        //var text = hours[index];
        // grabbing the text from textarea by id determine by var text
        //var input = $(`#${text}`);
       
        // go through each inpuit
        inputs = [];
        $('.activity-input').each(function(){
            // grab the text from text area
            var activities = {
                timeOfDay: ($(this).attr('id')),
                title: $(this).val(),  
            }
            inputs.push(activities);
        })
        
    
        localStorage.setItem('activities', JSON.stringify(inputs));
        
    })
         


        
   

    // color code calendar
    // grab the current time
    var currentTime = parseInt(moment().hour());
    console.log(currentTime);
    // compare to labels on form
    $('.activity-input').each(function(){
        if (currentTime === parseInt($(this).attr('data-index'))){
            $(this).addClass('current-time');
        } else if (currentTime < parseInt($(this).attr('data-index'))){
            $(this).addClass('future-time');
        } else {
            $(this).addClass('past-time');
        }
        console.log(`${$(this).attr('data-index')} ${currentTime}`)
        
    // if time is the same make the textarea red
    // if the time has past, make the textarea grey
    // if the time is in the future, make the textarea green
    }) 

    // change opacity of save button image
    // on mouseover
    $('img').hover(
        function() {
        $(this).stop().animate({"opacity": ".6"}, "slow");
        },
        function() {
        $(this).stop().animate({"opacity": "1"}, "slow");
        });
})