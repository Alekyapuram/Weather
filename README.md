# Weather App

This simple web application allows users to check the weather of a specific location using the OpenWeatherMap API.

## HTML Structure

The HTML file (`Weather.html`) defines the basic structure of the Weather App interface:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="weather.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<body>
    <div class="container">
        <!-- Title section -->
        <div class="title">
            <p>Weather App</p>
        </div>

        <!-- Input section -->
        <div class="input">
            <input type="text" id="location-input" placeholder="Enter location...">
            <input type="button" value="Get" id="btn">
        </div>

        <!-- Weather information section -->
        <div class="info">
            <!-- Weather icon -->
            <img src="https://res.cloudinary.com/dsx0xwcol/image/upload/v1705575463/cloud-outline_dmintw.png" id="icon">

            <!-- Temperature display -->
            <div class="temp"><span id="temp-value">25</span><span id="unit">&#176;</span><span id="c">C</span></div>

            <!-- Weather description -->
            <div class="weather-desc">Cloudy</div>

            <!-- Location display -->
            <div class="location" id="location"></div>
        </div>
    </div>

    <!-- JavaScript file -->
    <script src="weather.js"></script>
</body>
</html>
 
