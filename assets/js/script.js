let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
let saveBtn = $('.saveBtn');

function colorCode(){
    let currentTime = moment().format('HH');
    console.log(currentTime);
    let timeSlot = $('.time-block');
    console.log(timeSlot);
     console.log(timeSlot[0])
   for (i=0; i<13; i++){
    let milTime = timeSlot[i].getAttribute('id');
    if (parseInt(currentTime)===parseInt(milTime)){
        timeSlot[i].classList.add("present");
        timeSlot[i].classList.remove("past");
        timeSlot[i].classList.remove("future");
        }
    else if (parseInt(currentTime)>parseInt(milTime)){
        timeSlot[i].classList.add("past");
        timeSlot[i].classList.remove("present");
        timeSlot[i].classList.remove("future");
            }
    else if (parseInt(currentTime)<parseInt(milTime)){
        timeSlot[i].classList.add("future");
        timeSlot[i].classList.remove("past");
        timeSlot[i].classList.remove("present");
                }
};
}

// function saveEntry(){
//     console.log('clicky clicky')

// }

setInterval(colorCode(),1000);

// saveBtn.on('click', function(){
//     let eventId = $(this).attr('id');
//     let eventText = $(this).parent().siblings().children('.time-block').val();
//     localStorage.setItem(eventId, eventText);
//   ) 