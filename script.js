// Write your JavaScript code here!
window.addEventListener("load", function() {
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
      let planets = document.getElementById("missionTarget");
      let spacePlanets  = json[3]; 
// / This block of code shows how to format the HTML once you fetch some planetary JSON!
planets.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${spacePlanets.name}</li>
   <li>Diameter: ${spacePlanets.diameter}</li>
   <li>Star: ${spacePlanets.star}</li>
   <li>Distance from Earth: ${spacePlanets.distance}</li>
   <li>Number of Moons: ${spacePlanets.moons}</li>
</ol>
<img src="${spacePlanets.image}">
`;
});
});

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {

       event.preventDefault();

       // 1. Get all of the textboxes and store them into variables
       
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");

       // 2. Get all of the values from the textboxes, using the textbox variables

       let pilotNameValue = pilotName.value;
       let copilotNameValue = copilotName.value;
       let fuelLevelValue = fuelLevel.value;
       let cargoMassValue = cargoMass.value;
       let launchStatus = document.getElementById("launchStatus");
       // 3. Check IF all of the values are NOT empty strings ("")
       //    - IF any of them have empty strings, we need to alert the user
       //    - OTHERWISE keep going (aka nothing will happen)

       if (pilotNameValue === "" || copilotNameValue === "" || fuelLevelValue === "" || cargoMassValue === "") {
         alert("all fields are required");
     } else if (isNaN(pilotNameValue) === false)  {
          alert("Make sure to enter valid information for each pilot field!"); 
         } else if (isNaN(copilotNameValue) === false)  {
            alert("Make sure to enter valid information for each copilot field!");
     } else if (isNaN(fuelLevelValue) === true) {
          alert("Make sure to enter valid information for fuel level field!");
     } else if (isNaN(cargoMassValue) === true) {
          alert("Make sure to enter valid information for cargo Mass field!");
         
     } else if(fuelLevelValue >= 10000 || cargoMassValue < 10000) {
        
        launchStatus.style.color="green"
        launchStatus.innerHTML="Shuttle Ready for Launch"
     } else {
       launchStatus.innerHTML="Shuttle Not Ready for Launch"
       launchStatus.style.color="red"  
     }
     let faultyItems = document.getElementById("faultyItems");
     faultyItems.style.visibility = "visible"
     faultyItems.innerHTML = `
     <ol>
                    <li >Pilot Ready</li>
                    <li >Co-pilot Ready</li>
                    <li >Fuel level high enough for launch</li>
                    <li >Cargo mass low enough for launch</li>
                </ol>
     `;
      });
   }); 
  