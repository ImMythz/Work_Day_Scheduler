// Displays the current date in the header
function displayDate() {
    const currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate)
}

displayDate()
 
// Keeps track of the current time
const currentTime = moment().hour();
$("#currentHour").text(currentTime)
console.log(currentTime)

// Creates one hour time blocks
function createTable() {
    for ( let i = 9; i < 18; i++ ) {
        // Creates a row for each hour block created
        const row = document.createElement('div')
        row.setAttribute('id',`'${i}'`)
        row.classList.add('row')
        console.log("row created")

        // Creates block for the hour to be displayed in 
        const hourBlock =  document.createElement('div')
        hourBlock.classList.add('col-sm-2')
        const hourDisplay = document.createElement('p')
        hourDisplay.classList.add('hour')
        hourDisplay.innerText = TOD(i)
        hourBlock.appendChild(hourDisplay)

        // Creates a block for the text area
        const textBlock = document.createElement('div')
        textBlock.classList.add('col-sm-8')
        const textArea = document.createElement('textarea')
        textArea.setAttribute('id',`'${i}'`)
        textArea.classList.add('description')
        textArea.placeholder = 'Add Event'
        textBlock.appendChild(textArea)

        // Creates a button and block for a save button
        const saveBlock = document.createElement('div')
        saveBlock.classList.add('col-sm-1')
        const saveButton  = document.createElement('button')
        saveButton.classList.add('saveBtn')
        saveButton.setAttribute('id',`'${i}'`)
        const saveIcon = document.createElement('i')
        saveIcon.classList.add('fas', 'fa-save')
        saveButton.appendChild(saveIcon)
        saveBlock.appendChild(saveButton)
        
        // Adds all the blocks to the row initially created
        row.append(hourBlock)
        row.append(textBlock)
        row.append(saveBlock)

        // Adds the created row to the container in the HMTL
        $(".container").append(row)
    }

    // Determines if an hour block is 'past', 'present' or 'future'
    $('.description').each(function() {
        const whichHour = $(this).attr('id')
        console.log(whichHour)
        //Creating condition to compare time and change colors
        if (whichHour < currentTime) {
            $(this).addClass('past')
        } else if(whichHour === currentTime){
            $(this).addClass('present')
        } else {
            $(this).addClass('future')
        }
    })

    // Determines whether its AM or PM
    function TOD(hours){
        let ampm = hours >= 12 ? 'pm' : 'am'
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm
    }
}

createTable();

// Sets up Local Storage
$('.saveBtn').on('click', function(){
    const timeBlockKey = $(this).attr('id')
    const textAreaVal = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(timeBlockKey, textAreaVal)
    console.log(timeBlockKey)
})




