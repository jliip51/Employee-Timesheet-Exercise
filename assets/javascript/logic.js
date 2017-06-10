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

// Create firebase database variable 
var database = firebase.database();

// Variables 
var employeeName;
var role;
var startDate;
var monthlyRate;


$("#submit").on("click", function(event){

   event.preventDefault();

   employeeName = $("#employee-name").val().trim();
   role = $("#role").val().trim();
   startDate = $("#start-date").val().trim();
   monthlyRate = $("#monthly-rate").val().trim();

   database.ref().push({
   employeeName: employeeName,
   role: role,
   startDate: startDate,
   monthlyRate: monthlyRate
   });

});