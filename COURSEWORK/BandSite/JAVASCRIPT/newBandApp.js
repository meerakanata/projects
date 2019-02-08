
//DECLARE ANY GLOBAL VARIABLES
let baseURL = 'https://project-1-api.herokuapp.com';
let apiKey = '?api_key=1726debe-951a-4001-9a30-173425d6dac4';
let queryShows = '/comments'

//********TO GET COMMENTS TO DISPLAY ON PAGE LOAD **********


//DECLARE THE displayComments ()
//GET REQUEST TO GRAB COMMENTS FROM SERVER
function displayComments () {
    let request = fetch(baseURL+queryShows+apiKey);
    let commentsArr = [];

    request.then((response) => {
    return response.json();
    }).then((data) => {

        //TAKE WHAT'S IN THE RESPONSE DATA AND STORE IN NEW ARRAY commentsArr
        commentsArr = data;
        //console.log(commentsArr);

        //CLEAR ELEMENTS' CONTENTS ON THE PAGE
        let feedback = document.getElementById('containerComments');
        feedback.innerHTML = '';

        //USE FOREACH FUNCTION TO PASS OVER EACH ELEMENT OF commentsArr
        commentsArr.forEach ((apple) => {
            //CREATE NEW ELEMENTS AND APPEND CHILDREN TO PARENTS
            feedback = document.getElementById('containerComments');
            let row1 = document.createElement('div'); 
            let row2 = document.createElement('div'); 
            let row3 = document.createElement('div');
            let newNameElement = document.createElement('div'); 
            let newDateElement = document.createElement('div');
            let newCommentElement = document.createElement('div'); 
            let newLikeElement = document.createElement('img');
            newLikeElement.src = "../Assets/like_facebook-512.png"
            let newCounterElement = document.createElement('div'); 
  
            feedback.appendChild(row1);
            feedback.appendChild(row2);
            feedback.appendChild(row3);
            row1.appendChild(newNameElement);
            row1.appendChild(newDateElement);
            row2.appendChild(newCommentElement);
            row3.appendChild(newLikeElement);
            row3.appendChild(newCounterElement);
            //ASSIGN CLASS NAMES TO NEW ELEMENTS
            //PASS THE VALUE FROM EACH ELEMENT OF commentsArr TO THE RESPECTIVE ELEMENT ON THE PAGE  
            row1.className = "row1";
            row2.className = "row2"; 
            row3.className = "row3";  
            newNameElement.className = "row1__name";
            newDateElement.className = "row1__date";
            newCommentElement.className = "row2__comment";
            newLikeElement.className = "row3__like";
            newCounterElement.className = "row3__counter";

            newNameElement.innerHTML = apple.name; 
            newCommentElement.innerHTML = apple.comment;
            newDateElement.innerHTML = '6 months ago';
            newCounterElement.innerHTML = '45';
            return feedback;


        });
    //ENSURE ERRORS ARE ADDRESSED FOR FETCH 
    },(err) => {
        console.error("You've encountered an error: ", err);
    }).catch((err) => {
        console.error("You've encountered an error: ", err);
    });

};

//CALL THE displayComments() TO HAVE COMMENTS LOADED FROM SERVER ON PAGELOAD
displayComments();

//*************TO GET NEW COMMENT TO DISPLAY**********

//SET UP EVENTLISTENER
let form = document.getElementById('formGrab');
form.addEventListener('submit', (e) => {
    //USE preventDefault() TO PREVENT PAGE RELOAD ON 'submit'
    e.preventDefault(); 

    //GRAB COMMENTS FROM THE FORM FIELDS AND PASS VALUE IN TO VARIABLES
    let nameValue = ''; 
    let commentValue = ''; 

    nameValue = document.getElementById('userName').value;
    commentValue = document.getElementById('userComment').value;

    //STORE THE NEW COMMENTS IN AN OBJECT
    let objNew = {name: nameValue, comment:commentValue}; 

    //POST THE OBJECT TO THE SERVER (USE STRINGIFY TO CONVERT)
    const init = {
        method: 'POST',
        body: JSON.stringify(objNew),
        headers: {
        'content-type': 'application/json'
        }
    };
    let postRequest = fetch(baseURL+queryShows+apiKey, init);
    postRequest.then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    //ENSURE ERRORS ARE ADDRESSED FOR FETCH
    },(err) => {
        console.error("You've encountered an error: ", err);
    }).catch((err) => {
        console.error("You've encountered an error: ", err);
    });

    //USE setTimeout() TO INVOKE displayComments() WITH A 1 SECOND DELAY TO ACCOUNT FOR POSSIBLE DELAY WITH POST REQUEST ABOVE
    setTimeout(() =>{ displayComments(); }, 1000);
    //CLEAR THE CONTENTS OF THE FORM FIELDS
    document.getElementById('userName').value = '';
    document.getElementById('userComment').value ='';
})





