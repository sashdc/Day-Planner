let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
let saveBtn = $('.saveBtn');

// colour codes time blocks so they indivcate if they are past/present/future
function colorCode(){
    let currentTime = moment().format('HH');
    console.log(currentTime);
    let timeSlot = $('.time-block');
   for (i=0; i<9; i++){
    if (parseInt(currentTime)===(i+9)){
        timeSlot[i].classList.add("present");
        }
    else if (parseInt(currentTime)>(i+9)){
        timeSlot[i].classList.add("past");
            }
    else if (parseInt(currentTime)<(i+9)){
        timeSlot[i].classList.add("future");
                }
};
}

// calls the function of colour coding every second so that it is updated as time passes
setInterval(colorCode(),1000);




$(".saveBtn").on("click", function(){
    let saveSlot = $(this).parent().children().eq(1).attr("id");
    let saveItem = $(this).parent().children().eq(1).val();
    localStorage.setItem(saveSlot, saveItem);

    let addNot = '<h5>Your Task has been added to localstorage ✅</h5>';
    // addNot.addClass('justify-content-center')
    $('.container').prepend(addNot);
    // setTimeout(addNot.hide(),2000)
});

// function init() {
//     let saveSlot = $('.hour')
//     let saveItem = $('.time-block')
//     let value = localStorage.getItem(saveSlot, saveItem);
//     if (value) {
//         $(`#${key}`).text(value);
//     }
// }


// init();