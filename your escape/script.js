const destinations = {
    paris: {
        budget: "$2000",
        country: "France",
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        trips: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"]
    },
    rome: {
        budget: "$2500",
        country: "Italy",
        hotels: ["Hotel X", "Hotel Y", "Hotel Z"],
        trips: ["Colosseum", "Vatican City", "Trevi Fountain"]
    },
    tokyo: {
        budget: "$3000",
        country: "Japan",
        hotels: ["Hotel M", "Hotel N", "Hotel O"],
        trips: ["Tokyo Disneyland", "Mount Fuji", "Asakusa Temple"]
    }
};

function planTravel() {
    const destinationSelect = document.getElementById("destination");
    const selectedDestination = destinationSelect.value;

    if (destinations[selectedDestination]) {
        const { budget, country, hotels, trips } = destinations[selectedDestination];

        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `
            <p>Your budget for visiting ${selectedDestination} in ${country} is ${budget}.</p>
            <p>Hotels in ${selectedDestination}:</p>
            <ul>${hotels.map(hotel => `<li>${hotel}</li>`).join("")}</ul>
            <p>Trip Destinations in ${selectedDestination}:</p>
            <ul>${trips.map(trip => `<li>${trip}</li>`).join("")}</ul>
        `;
    } else {
        alert("Invalid destination selected.");
    }
}
