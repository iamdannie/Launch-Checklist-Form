// Write your JavaScript code here!
window.addEventListener("load", function() {
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {

      
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
});
});

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       event.preventDefault();

       // 1. Get all of the textboxes and store them into variables
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=pilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");

       // 2. Get all of the values from the textboxes, using the textbox variables
       let pilotNameValue = pilotName.value;
       let copilotNameValue = copilotName.value;
       let fuelLevelValue = fuelLevel.value;
       let cargoMassValue = cargoMass.value;
       // 3. Check IF all of the values are NOT empty strings ("")
       //    - IF any of them have empty strings, we need to alert the user
       //    - OTHERWISE keep going (aka nothing will happen)
       if (pilotNameValue === "" || copilotNameValue === "" || fuelLevelValue === "" || cargoMassValue === "") {
           alert("all fields are required");
       
          } else if (isNan(pilotNameValue) === false) {
           alert("enter valid information for fields");
       }
      });
   }); 
  