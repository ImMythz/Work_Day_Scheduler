// Displays the current date in the header
function displayDate() {
    const currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate)
}

displayDate()
 
// Keeps track of the current time
function currentTime() {
    const currentTime = moment().format("hh:mm:ss a");
    $("").text(currentTime)
}

currentTime()