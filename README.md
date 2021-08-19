![image](assets/home.PNG)

<div align="center">
    <b>🗺️🕑 Minimalist interface that displays current time, custom greetings and weather.</b>
</div>

<br />

## Table of contents 👇

-   [✨ Explanation](#-explanation)
-   [🎨 Customization and features](#-customization-and-features)
-   [⛈️ Weather API](#-weather-api)
-   [🚀 Usage](#-usage)
-   [💛 Contact](#-contact)

### ✨ Explanation

I've made this project with the main purpose of learn new skills about JavaScript, CSS (mostly Grid and Flex Layout) and improve my knowledge about consuming APIs.

### 🎨 Customization and features

You can customice the app with the following features:

-   Easy configuration file `config.js`.
-   Custom name.
-   Custom greetings based on the current time.
-   Modular JS files for a better approach to the app.

```js
// GENERAL
name: 'Jorge',

// GREETINGS
greetingMorning: 'Good morning',
greetingAfternoon: 'Good afternoon',
greetingEvening: 'Good evening',
greetingNight: 'Good night'
```

### ⛈️ Weather API

Open Weather Map API provides you all the information about the forecast and weather in specific locations. To run the app, you simply need to set your API key in the `key.js` file.

This app runs with **latitude** and **longitude**, but you can also search by other terms like city or country.

### 🚀 Usage

-   Clone this repo.
-   Rename the `key.example.js` file to `key.js`.
-   Update your data in that file:

```js
const API = {
	// WEATHER
	weatherKey: '', // Paste here your API code for Open Weather Map
	weatherUnit: 'C', //
	weatherLatitude: '', // Paste here your latitude based on your location
	weatherLongitude: '', // Paste here your longitude based on your location
};
```

### 💛 Contact

If you have some doubts or need to ask something about the project, feel free to reach me here:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)
