// const { formSubmission } = require("./scriptHelper");

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let list = document.getElementById("faultyItems");

        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }

        if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();

        } else {
            event.preventDefault();
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
            
        }
    });
});

window.addEventListener("load", function() {
   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
    //    console.log(listedPlanets);

       let planet = pickPlanet(listedPlanets);

       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let moons = planet.moons;
       let imageUrl = planet.image;
    
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

   })

});