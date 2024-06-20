const inputEle = document.getElementById('location-input');
const tempEle = document.getElementById('temp-value');
const locEle = document.getElementById('location');
const weatherEle = document.getElementById('weather-desc');
const btnEle = document.getElementById('btn');

const apiKey = 'a2ab5c9fb156cac16e307051db5cb75c';

btnEle.onclick = function () {
    if (inputEle.value === "") {
        alert('Please enter some location');
    } else {
        const location = inputEle.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        fetch(apiUrl)
           .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data: ${response.status}`);
                }
                return response.json();
            })
           .then(data => {
                console.log(data);

                // Check if the API response contains the expected data structure
                if (!data || !data.main || !data.weather || !data.weather[0]) {
                    throw new Error('Invalid response from weather API');
                }

                const { name, main, weather } = data;
                const { feels_like } = main; // This is the "feels like" temperature in Kelvin
                const { description } = weather[0];

                // Correctly convert Kelvin to Celsius
                tempEle.innerText = Math.floor(feels_like - 273.15);
                locEle.innerText = name;
                weatherEle.innerText = description;
            })
           .catch(error => {
                console.error('Error fetching weather:', error);

                // Display different alerts based on the type of error
                if (error.message.includes('Failed to fetch')) {
                    alert('Unable to fetch weather data. Please check your internet connection.');
                } else if (error.message === 'Invalid response from weather API') {
                    alert('Invalid response received from weather API. Please try again later.');
                }
                // Handle other specific error cases if needed, but avoid a generic catch-all here
            })
           .finally(() => {
                inputEle.value = ""; // Clear the input field after submission
            });
    }
};


