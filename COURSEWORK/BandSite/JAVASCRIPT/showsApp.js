// let showsContainer = document.getElementById('showsData');
// let rowDiv = document.createElement('div'); 
// let dayDiv = document.createElement('div');
// let dateDiv = document.createElement('div');
// let venueDiv = document.createElement('div');
// let locationDiv =  document.createElement('div');


//let buttonDiv = document.createElement('div');

//append the new elements to parent element class='showsData'
// showsContainer.appendChild(rowDiv);
// rowDiv.appendChild(dayDiv);
// rowDiv.appendChild(locationDiv);
// rowDiv.appendChild(buttonDiv);
// dayDiv.appendChild(dateDiv);
// dayDiv.appendChild(venueDiv);


//assigning class names for all the newly created elements
// rowDiv.className = "rowDiv";
// dayDiv.className = "dayDiv";
// dateDiv.className = "dateDiv";
// venueDiv.className = "venueDiv";
// locationDiv.className = "locationDiv";
// buttonDiv.className = "buttonDiv";





let baseURL = 'https://project-1-api.herokuapp.com';
let apiKey = '?api_key=7509240c-8e74-43b4-a6e7-92459bd01ee5';
let queryShows = '/showdates'

//attempting to fetch data for shows
let request = fetch(baseURL+queryShows+apiKey);
let showsArray = [];
request.then((response) => {
  return response.json();
}).then((data) => {

  showsArray = data;
  console.log(showsArray);

    showsArray.forEach ((pineapple) => {
    
        let showsContainer = document.getElementById('showsData');
        let rowDiv = document.createElement('div'); 
        let dayDiv = document.createElement('div');
        let dateDiv = document.createElement('div');
        let venueDiv = document.createElement('div');
        let locationDiv =  document.createElement('div');
        let buttonDiv = document.createElement('div');

        showsContainer.appendChild(rowDiv);
        rowDiv.appendChild(dayDiv);
        rowDiv.appendChild(locationDiv);
        rowDiv.appendChild(buttonDiv);
        dayDiv.appendChild(dateDiv);
        dayDiv.appendChild(venueDiv);

        rowDiv.className = "rowDiv";
        dayDiv.className = "dayDiv";
        dateDiv.className = "dateDiv";
        venueDiv.className = "venueDiv";
        locationDiv.className = "locationDiv";
        buttonDiv.className = "buttonDiv";

        dateDiv.innerHTML = pineapple.date;
        venueDiv.innerHTML = pineapple.place;
        locationDiv.innerHTML = pineapple.location;
        buttonDiv.innerHTML = 'GET TICKETS';


    });
    
});
//need to put in a solve for error return!!!


