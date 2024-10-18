Sure! Here’s a README file for your Weather App structured similarly to the Todo application README you provided, with a live demo section at the beginning:

```markdown
# Live Demo: [Weather App](https://wheatherappmaaz.netlify.app/)

# Weather App

A weather application built with React that allows users to search for and view current weather conditions for different cities. The app fetches data from the OpenWeatherMap API, providing real-time weather updates.

## Features

- **Search for Weather**: Users can enter a city name to retrieve current weather information.
- **Toggle Temperature Units**: Switch between Celsius and Fahrenheit for temperature readings.
- **Display Comprehensive Weather Data**: Shows temperature, humidity, wind speed, pressure, and overall weather conditions.
- **Responsive Design**: The app is optimized for both desktop and mobile devices.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Maaz-Ai-enthusiast/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the Application**:
   ```bash
   pnpm run dev
   ```
   The application will start on `http://localhost:3000`.

## Project Structure

- **`/src`**: Main source folder.
  - **`/components`**: Contains various React components for the application.
    - **`Weather.js`**: Main component that fetches and displays weather data.
    - **`SearchBar.js`**: Component for entering city names and submitting searches.
  - **`App.js`**: The root component that manages state and renders the main UI.
  - **`App.css`**: Contains the styling for the application.

## Main Components

### 1. `Weather`
- Fetches weather data from the OpenWeatherMap API based on user input.
- Displays current weather conditions, including temperature, humidity, wind speed, and pressure.
- Toggles between Celsius and Fahrenheit using local component state.

### 2. `SearchBar`
- Accepts user input for city names.
- Handles form submission to fetch weather data for the specified city.

## How It Works

1. **Searching for Weather**:
   - Enter a city name in the search bar and click "GO".
   - The app fetches and displays the weather information for that city.

2. **Toggling Temperature Units**:
   - Click the toggle button to switch between Celsius and Fahrenheit.

## Technologies Used

- **React**: For building the UI and managing state.
- **React Query**: For efficient data fetching and caching.
- **JavaScript**: For logic and interactivity.
- **CSS**: For styling the components.
- **OpenWeatherMap API**: To fetch real-time weather data.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Key Features
- **Live Demo Link**: Included at the top for easy access.
- **Structured Sections**: Similar format to your Todo application README.
- **Detailed Information**: Describes features, installation, project structure, components, and how the app works.

### Usage
1. **Copy and paste** the markdown into your `README.md` file.
2. **Preview** to ensure formatting is correct.

Let me know if you need any further modifications or additional information!
