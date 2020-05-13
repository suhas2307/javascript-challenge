// Select the button element
var button = d3.select('#filter-btn');
// Select the form element
var form = d3.select('form');
// Select the table body
var table = d3.select('tbody');
// Select No Data Found element
var noDataFound = d3.select('#no-data-found');
// Set Events
button.on('click', handleEvent);
form.on('submit', handleEvent);

// Define event handler
function handleEvent() {
    // Prevent page refresh
    d3.event.preventDefault();

    // Clear the data in the table element
    table.html('');
    noDataFound.text('');

    // Get the input supplied by the user
    var input = d3.select('#datetime');
    var inputVal = input.property('value');

    // Filter data based on the Input Value
    var filteredData = data.filter(item => item.datetime === inputVal);

    // Display the filtered data on the page
    if (filteredData.length !==0) {
        filteredData.forEach(item => {
            // Add a row
            var row = table.append('tr');
            // Add a field and display the values
            Object.values(item).forEach(val => {
                row.append('td').text(val);
            });
        });
    }
    else {
        noDataFound.text('No Data Found');
    }
};
