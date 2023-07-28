// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

function formSubmission(document, pilot, copilot, fuellevel, cargomass) {
    // const pilotName = document.getElementById("pilotName").value;
    // const coPilotName = document.querySelector("input[name="copilotName"]").value;
    // const fuelLevel = document.querySelector("input[name="fuelLevel"]").value;
    // const cargoMass = document.querySelector("input[name="cargoMass"]").value;

    // const validPilotName = validateInput(pilotName) === "Not a Number";
    // const validCoPilotName = validateInput(coPilotName) === "Not a Number";
    // const validFuelLevel = validateInput(fuelLevel) === "Is a Number";
    // const validCargoMass = validateInput(cargoMass) === "Is a Number";

    // document.getElementById("pilotStatus").innerHTML = validPilotName ? `Pilot: ${pilotName}` : "Invalid pilot name";
    // document.getElementById("copilotStatus").innerHTML = validCoPilotName ? `Co-pilot: ${coPilotName}` : "Invalid co-pilot name";
    // document.getElementById("fuelStatus").innerHTML = validFuelLevel ? `Fuel level: ${fuelLevel}` : "Invalid fuel level";
    // document.getElementById("cargoStatus").innerHTML = validCargoMass ? `Cargo mass: ${cargoMass}` : "Invalid cargo mass";

    // if (validPilotName && validCoPilotName && validFuelLevel && validCargoMass) {
    //     if (fuelLevel < 10000) {
    //         document.getElementById("faultyItems").style.visibility = "visible";
    //         document.getElementById("faultyItems").innerHTML = "Fuel level too low";
    //         document.getElementById("fuelStatus").style.color = "#C7254E";
    //         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    //         document.getElementById("launchStatus").style.color = "#C7254E";
    //     } else if (cargoMass > 10000) {
    //         document.getElementById("faultyItems").style.visibility = "visible";
    //         document.getElementById("faultyItems").innerHTML = "Cargo mass too high";
    //         document.getElementById("fuelStatus").style.color = "#000000";
    //         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    //         document.getElementById("launchStatus").style.color = "#C7254E";
    //     } else {
    //         document.getElementById("faultyItems").style.visibility = "hidden";
    //         document.getElementById("fuelStatus").style.color = "#000000";
    //         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    //         document.getElementById("launchStatus").style.color = "#419F6A";
    //     }
    // } else {
    //     document.getElementById("faultyItems").style.visibility = "visible";
    //     document.getElementById("faultyItems").innerHTML = "Pilot, co-pilot, fuel level, and/or cargo mass are invalid.";
    //     document.getElementById("fuelStatus").style.color = "#000000";
    //     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    //     document.getElementById("launchStatus").style.color = "#C7254E";
    // }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
