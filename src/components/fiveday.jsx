import React from "react";

const FiveDayForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#4B5563",
          color: "white",
          borderRadius: "0.75rem",
          padding: "15px",
          width: "100%",
          maxWidth: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          boxSizing: "border-box",
        }}
        className="five-day-forecast-container"
      >
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "12px",
            fontWeight: "600",
            margin: "0 0 12px 0",
          }}
        >
          5-Day Forecast
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          className="forecast-list"
        >
          {forecastData.list.slice(0, 5).map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#374151",
                borderRadius: "0.6rem",
                padding: "10px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                transition: "transform 0.2s ease",
                minHeight: "60px",
                gap: "8px",
              }}
              className="forecast-item"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* Left Side: Date & Icon */}
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  flex: "1",
                  minWidth: "0"
                }}
                className="forecast-left"
              >
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  style={{ 
                    width: "40px", 
                    height: "40px",
                    flexShrink: "0"
                  }}
                  className="weather-icon"
                />
                <div style={{ minWidth: "0", flex: "1" }}>
                  <div 
                    style={{ 
                      fontSize: "14px", 
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {formatDate(item.dt_txt)}
                  </div>
                  <div 
                    style={{ 
                      fontSize: "12px", 
                      color: "#d1d5db",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                    className="weather-description"
                  >
                    {item.weather[0].description}
                  </div>
                </div>
              </div>

              {/* Right Side: Temp */}
              <div 
                style={{ 
                  fontSize: "16px", 
                  fontWeight: "bold",
                  flexShrink: "0",
                  textAlign: "right"
                }}
                className="temperature"
              >
                {Math.round(item.main.temp)}°C
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .five-day-forecast-container {
            padding: 12px !important;
          }
          
          .forecast-item {
            padding: 8px 10px !important;
            min-height: 50px !important;
            gap: 6px !important;
          }
          
          .weather-icon {
            width: 35px !important;
            height: 35px !important;
          }
          
          .forecast-left {
            gap: 6px !important;
          }
          
          .temperature {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .five-day-forecast-container {
            padding: 10px !important;
          }
          
          .forecast-item {
            padding: 6px 8px !important;
            min-height: 45px !important;
            gap: 4px !important;
          }
          
          .weather-icon {
            width: 30px !important;
            height: 30px !important;
          }
          
          .forecast-left {
            gap: 4px !important;
          }
          
          .weather-description {
            display: none !important;
          }
          
          .temperature {
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 360px) {
          .forecast-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 8px !important;
            gap: 5px !important;
          }
          
          .forecast-left {
            width: 100% !important;
            justify-content: space-between !important;
          }
          
          .temperature {
            align-self: flex-end !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FiveDayForecast;