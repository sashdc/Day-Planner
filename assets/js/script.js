let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
let saveBtn = $('.saveBtn');
let schedule = [];
let timeSlot = $('.time-block');

// colour codes time blocks so they indivcate if they are past/present/future
function colorCode(){
    let currentTime = moment().format('HH');
    console.log(currentTime);
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

// calls the function of colour coding every 30 seconds so that it is updated as time passes
setInterval(colorCode(),30000);

// saving entry and ID to local storage so they are tied and can be identified
$(".saveBtn").on("click", function(){
    let saveSlot = $(this).parent().children().eq(1).attr("id");
    let saveItem = $(this).parent().children().eq(1).val();
    let scheduleItem ={
        saveSlot,saveItem
    }
    schedule.push(scheduleItem)
    localStorage.setItem("To-Do-List", JSON.stringify(schedule));

    let addNot = '<h5>Your Task has been added to localstorage ✅</h5>';
    // addNot.addClass('justify-content-center')
    $('.container').prepend(addNot);
    // setTimeout(addNot.hide(),2000)
});

function init() {
    if (localStorage.getItem("To-Do-List") !== null){
        schedule=JSON.parse(localStorage.getItem("To-Do-List"));
        console.log(schedule);
        for (let i=0;i<schedule.length;i++){;
        $('#saveSlot').innerText=schedule.saveItem  ;
        }
        
        }
    
}

init();