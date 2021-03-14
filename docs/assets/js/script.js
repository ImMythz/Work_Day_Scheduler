// declairing variables to use later
var timeDisplayEl = $('#time-display');


// displays the current time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// setting up local storage
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
  }

// creating a clear button
$( document ).ready(function() {

    var clearBtn = $(`<button>`);
    clearBtn.addClass("clear-button")
    clearBtn.text("Clear All")
    $("#clear-all-btn").append(clearBtn);

// i = hour and loops through hours 9-5 and gives each column an id indicating the hour
    for (let i = 9; i < 18; i++) {
      var row = $(`<div data-time=${i} id='${i}' class="row">`);
    // creates columns and icons
      var col1 = $('<div class="col-sm-2"> <p class="hour">' + timeAMPM(i) + '</p>'); 
      var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add Event"></textarea>`);        
      var col3 = $(`<div class="col-sm-1"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`); 
      
    // append col to row
      row.append(col1);
      row.append(col2);
      row.append(col3);

    // adds row to container
      $(".container").append(row);

      getLocalStorage(i);
    }

  
  // displays am or pm depending on the hour
  function timeAMPM(hours) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
}

timeAMPM();

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
  var eventId = $(this).attr('id');
  var eventText = $(this).parent().siblings().children('.description').val();
  localStorage.setItem(eventId, eventText);
});

// clear description and local storage.
clearBtn.on('click', function(){
$('.description').val("");
localStorage.clear();

});

});

// Runs displayTime function and dictates how long till the time refreshes
setInterval(displayTime, 1000);