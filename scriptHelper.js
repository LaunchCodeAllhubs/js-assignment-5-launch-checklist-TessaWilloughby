require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `
}

function validateInput(testInput) {
    if (testInput.trim() === "") {
        return "Empty";
    }

    if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let coPilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("launchStatus");

    const validPilotName = validateInput(pilot.value) === "Not a Number";
    const validCoPilotName = validateInput(copilot.value) === "Not a Number";
    const validFuelLevel = validateInput(fuelLevel.value) === "Is a Number";
    const validCargoMass = validateInput(cargoMass.value) === "Is a Number";

    if (validFuelLevel && (fuelLevel.value) < 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "#C7254E";

        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        coPilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level too low for launch`;

    } 
    if (validCargoMass && parseInt(cargoMass.value) > 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "#C7254E";

        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        coPilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;

    }
    if (validCargoMass && (cargoMass.value) <= 10000 && validFuelLevel && (fuelLevel.value) >= 10000 && validPilotName && validCoPilotName) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = "#419F6A";

        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        coPilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
