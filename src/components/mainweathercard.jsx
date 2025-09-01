import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Hot
import AcUnitIcon from '@mui/icons-material/AcUnit';   // Cold
import CloudIcon from '@mui/icons-material/Cloud';     // Moderate

const MainWeatherCard = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "City not available";
  const countryName = weatherData?.sys?.country || "Country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return (
        <WbSunnyIcon 
          style={{ marginLeft: "10px", fontSize: "3rem", color: "#facc15" }} 
          className="temp-icon"
        />
      );
    } else if (temperatureCelsius < 10) {
      return (
        <AcUnitIcon 
          style={{ marginLeft: "10px", fontSize: "3rem", color: "#38bdf8" }} 
          className="temp-icon"
        />
      );
    } else {
      return (
        <CloudIcon 
          style={{ marginLeft: "10px", fontSize: "3rem", color: "#9ca3af" }} 
          className="temp-icon"
        />
      );
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#374151",
          color: "white",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "320px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          boxSizing: "border-box",
          margin: "0 auto",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        className="main-weather-card"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
        }}
      >
        {/* Heading */}
        <div 
          style={{ 
            fontSize: "18px", 
            fontWeight: "500", 
            marginBottom: "8px",
            color: "#D1D5DB"
          }}
          className="weather-heading"
        >
          Now
        </div>

        {/* Temperature */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "8px",
            flexWrap: "wrap",
            gap: "8px"
          }}
          className="temperature-display"
        >
          <span className="temp-value">{temperatureCelsius}°C</span>
          {renderTemperatureIcon()}
        </div>

        {/* Description */}
        <div 
          style={{ 
            fontSize: "15px", 
            fontWeight: "400", 
            color: "#d1d5db",
            marginBottom: "16px",
            textTransform: "capitalize",
            lineHeight: "1.4"
          }}
          className="weather-description"
        >
          {weatherDescription}
        </div>

        {/* Date + Location */}
        <div 
          style={{ 
            fontSize: "13px", 
            lineHeight: "1.6",
            color: "#9CA3AF"
          }}
          className="weather-info"
        >
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "6px",
              marginBottom: "6px",
              flexWrap: "wrap"
            }}
            className="date-info"
          >
            <CalendarMonthIcon 
              style={{ fontSize: "18px", color: "#9ca3af" }} 
              className="info-icon"
            />
            <span>{currentDate}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              flexWrap: "wrap"
            }}
            className="location-info"
          >
            <LocationOnIcon 
              style={{ fontSize: "18px", color: "#9ca3af" }} 
              className="info-icon"
            />
            <span style={{ wordBreak: "break-word" }}>
              {cityName}, {countryName}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-weather-card {
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .main-weather-card {
            max-width: 100% !important;
            padding: 16px !important;
            margin: 0 !important;
          }
          
          .weather-heading {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }
          
          .temperature-display {
            font-size: 36px !important;
            margin-bottom: 6px !important;
            gap: 6px !important;
          }
          
          .temp-icon {
            font-size: 2.5rem !important;
            margin-left: 6px !important;
          }
          
          .weather-description {
            font-size: 14px !important;
            margin-bottom: 12px !important;
          }
          
          .weather-info {
            font-size: 12px !important;
          }
          
          .info-icon {
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-weather-card {
            padding: 12px !important;
            border-radius: 0.75rem !important;
          }
          
          .weather-heading {
            font-size: 15px !important;
          }
          
          .temperature-display {
            font-size: 32px !important;
            flex-direction: column !important;
            gap: 4px !important;
          }
          
          .temp-icon {
            font-size: 2.2rem !important;
            margin-left: 0 !important;
          }
          
          .weather-description {
            font-size: 13px !important;
            margin-bottom: 10px !important;
          }
          
          .weather-info {
            font-size: 11px !important;
          }
          
          .date-info, .location-info {
            gap: 4px !important;
            margin-bottom: 4px !important;
          }
          
          .info-icon {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 360px) {
          .main-weather-card {
            padding: 10px !important;
          }
          
          .temperature-display {
            font-size: 28px !important;
          }
          
          .temp-icon {
            font-size: 2rem !important;
          }
          
          .weather-description {
            font-size: 12px !important;
          }
          
          .weather-info {
            font-size: 10px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .main-weather-card {
            max-width: 350px !important;
            padding: 24px !important;
          }
          
          .weather-heading {
            font-size: 20px !important;
            margin-bottom: 10px !important;
          }
          
          .temperature-display {
            font-size: 44px !important;
            margin-bottom: 10px !important;
          }
          
          .temp-icon {
            font-size: 3.5rem !important;
          }
          
          .weather-description {
            font-size: 16px !important;
            margin-bottom: 18px !important;
          }
          
          .weather-info {
            font-size: 14px !important;
          }
          
          .info-icon {
            font-size: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainWeatherCard;