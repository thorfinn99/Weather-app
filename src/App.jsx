import React, { useState, useEffect } from "react";
import Navbar from "../src/components/navbar";
import MainWeatherCard from "../src/components/mainweathercard";
import FiveDayForecast from "../src/components/fiveday";
import TodayHighlights from "../src/components/todayhighlights";
import axios from "axios";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London"); // Default city
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  // Fetch Air Quality
  const fetchAirQualityData = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => setAirQualityData(response.data.list[0]))
      .catch((error) =>
        console.error("Error fetching the air quality data:", error)
      );
  };

  // Fetch Weather + Forecast
  const fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          console.error("Weather API error:", data.message);
          setWeatherData(null);
          setAirQualityData(null);
          setFiveDayForecast(null);
          return;
        }
        setWeatherData(data);
        if (data.coord) {
          fetchAirQualityData(data.coord.lat, data.coord.lon);
        }
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
          )
          .then((response) => setFiveDayForecast(response.data))
          .catch((error) =>
            console.error("Error fetching the 5-day forecast data:", error)
          );
      })
      .catch((error) => console.error("Error fetching the weather data:", error));
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div style={{ 
      background: "#f9fafb", 
      minHeight: "100vh",
      width: "100%"
    }}>
      <Navbar onSearch={handleSearch} />
      {weatherData && airQualityData && (
        <div
          style={{
            padding: "16px 20px",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              alignItems: "start",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "1fr 400px"
              }
            }}
            className="responsive-grid"
          >
            {/* Left Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minWidth: "0" // Prevents overflow
              }}
            >
              <MainWeatherCard weatherData={weatherData} />
              {fiveDayForecast && (
                <FiveDayForecast forecastData={fiveDayForecast} />
              )}
            </div>
            
            {/* Right Column */}
            <div style={{ minWidth: "0" }}>
              <TodayHighlights
                weatherData={weatherData}
                airQualityData={airQualityData}
              />
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          align-items: start;
        }
        
        @media (min-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr 400px;
          }
        }
        
        @media (min-width: 1200px) {
          .responsive-grid {
            grid-template-columns: 2fr 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .responsive-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default WeatherDashboard;
