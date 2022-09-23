let currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);


// function colorCode(){
//     let currentTime = new Date().getHours();
//     for (let i = 9; i < 18; i++) { 
//     console.log(currentTime, $(`#${i}`).data("time"));
//      if ($(`#${i}`).data("time") == currentTime){
//         $(`#text${i}`).addClass( "present");
//     } else if (currentTime < $(`#${i}`).data("time")) {
//         $(`#text${i}`).addClass( "future");
//     }
// }
// }

function colorCode(){
    let currentTIme = moment().format('hh')
    console.log(currentTIme)
    let slotTime = $('hour');
    console.log(slotTime.val)
    }

colorCode();