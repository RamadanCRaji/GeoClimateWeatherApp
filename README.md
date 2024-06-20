# 🌦 Project: GeoClimateWeatherApp
This project is a simple, yet effective, weather application. By entering a city name, users can retrieve real-time weather data including temperature, humidity, wind speed, and current weather conditions. See it [live here](https://ramadancraji.github.io/GeoClimateWeatherApp/).

Screenshot Here (insert screenshot image here)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The core of this application is written in JavaScript. It utilizes the fetch API to make HTTP requests to the OpenWeatherMap API. When a user inputs a city name and clicks the button, the getWeather function is called. This function constructs a URL with the city name and sends a GET request to the OpenWeatherMap API. The data returned from the API is then used to populate the weather information on the webpage.

## Optimizations

The current implementation of the project serves its purpose well, but there are optimizations that could be made to improve the codebase, particularly with the application of Object-Oriented Programming (OOP) principles.

For instance, we could encapsulate the weather data into a Weather class. Each instance of this class could represent a city's weather, with properties for temperature, humidity, wind speed, and weather condition. The class could also include methods to retrieve the data from the API and to update the UI. This would make the code more modular, easier to read, and more maintainable.

In addition, using OOP would allow us to keep the code DRY (Don't Repeat Yourself). For example, the switch-case block in the getWeather function could be replaced with a method in the Weather class that uses an object or a Map to map weather conditions to image file paths.

## Lessons Learned:

Building this project was a great way to practice making API requests and handling responses in JavaScript. It also helped reinforce my understanding of event listeners and how to manipulate the DOM. There were definitely a few "aha!" moments when I was able to successfully retrieve and display the weather data. This project has reinforced the importance of careful debugging and attention to detail in coding.



