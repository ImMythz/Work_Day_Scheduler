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

// Sets up Local Storage


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
        hourDisplay.innerText = i
        hourBlock.appendChild(hourDisplay)

        // Creates a block for the text area
        const textBlock = document.createElement('div')
        textBlock.classList.add('col-sm-8')
        const textArea = document.createElement('textarea')
        textArea.setAttribute('id',`'text${i}'`)
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
}

createTable();

// Determine whether its AM or PM


// Determines if an hour block is 'past', 'present' or 'future'




