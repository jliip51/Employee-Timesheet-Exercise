  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCh5qSZOsqv8OkSjbf58GBOLTFjcYtuiA4",
    authDomain: "employee-tracker-2ad3a.firebaseapp.com",
    databaseURL: "https://employee-tracker-2ad3a.firebaseio.com",
    projectId: "employee-tracker-2ad3a",
    storageBucket: "employee-tracker-2ad3a.appspot.com",
    messagingSenderId: "465264907534"
  };
  firebase.initializeApp(config);

// create firebase database variable 
var database = firebase.database();

// variables 
var employeeName;
var role;
var startDate;
var monthlyRate;


// button to add employees
$("#submit").on("click", function(event){

   event.preventDefault();

// grabs user input
   employeeName = $("#employee-name").val().trim();
   role = $("#role").val().trim();
   startDate = $("#start-date").val().trim();
   monthlyRate = $("#monthly-rate").val().trim();


// uploads employee data to the database
   database.ref().push({
   employeeName: employeeName,
   role: role,
   startDate: startDate,
   monthlyRate: monthlyRate
   });

});


database.ref().on("child_added", function(childSnapshot) {

  console.log(childSnapshot.val().employeeName);
  console.log(childSnapshot.val().role);
  console.log(childSnapshot.val().startDate);
  console.log(childSnapshot.val().monthlyRate);

});


