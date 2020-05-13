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
// form.on('submit', handleEvent); // DOES NOT WORK
form.on('change', handleEvent);

// Define event handler
function handleEvent() {
    // Prevent page refresh
    d3.event.preventDefault();

    // Clear the data in the table element
    table.html('');
    noDataFound.text('');

    // Get the input supplied by the user
    var inputDate = d3.select('#datetime').property('value');
    var inputCity = d3.select('#city').property('value');
    var inputState = d3.select('#state').property('value');
    var inputCountry = d3.select('#country').property('value');
    var inputShape = d3.select('#shape').property('value');

    // Filter data based on the Input Value
    // Variable for filtered Data. Assign the entire data to it to begin with
    var filteredData = data;

    if (inputDate !== '') {
        filteredData = filteredData.filter(item => item.datetime === inputDate);
    };

    if (inputCity !== '') {
            filteredData = filteredData.filter(item => item.city === inputCity);
    };

    if (inputState !== '') {
            filteredData = filteredData.filter(item => item.state === inputState);
    };

    if (inputCountry !== '') {
            filteredData = filteredData.filter(item => item.country === inputCountry);
    };

    if (inputShape !== '') {
            filteredData = filteredData.filter(item => item.shape === inputShape);
    };    

    // Display the filtered data on the page
    if (filteredData.length !== 0) {
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
