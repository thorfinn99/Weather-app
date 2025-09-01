import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import HighlightBox from "../../src/components/Highlightbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompressIcon from "@mui/icons-material/Compress";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

const TodayHighlights = ({ weatherData, airQualityData }) => {
  const { main, visibility, sys } = weatherData;
  const airQualityIndex = airQualityData?.main?.aqi;
  const { co, no, no2, o3 } = airQualityData?.components || {};

  const renderAirQualityDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return { text: "Good", color: "#4CAF50" }; // Green
      case 2:
        return { text: "Fair", color: "#8BC34A" }; // Light green
      case 3:
        return { text: "Moderate", color: "#FFC107" }; // Yellow
      case 4:
        return { text: "Poor", color: "#FF9800" }; // Orange
      case 5:
        return { text: "Very Poor", color: "#F44336" }; // Red
      default:
        return { text: "Unknown", color: "#9E9E9E" }; // Grey
    }
  };

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    { title: "Pressure", value: `${main.pressure} hPa`, Icon: CompressIcon },
    { title: "Visibility", value: `${visibility / 1000} km`, Icon: VisibilityIcon },
    { title: "Feels Like", value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
  ];

  const aqiInfo = renderAirQualityDescription(airQualityIndex);

  return (
    <>
      <div
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          width: "100%",
          maxWidth: "100%",
          borderRadius: "1rem",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          boxSizing: "border-box",
        }}
        className="today-highlights-container"
      >
        <div style={{ fontSize: "22px", fontWeight: "600", marginBottom: "20px" }}>
          Today's Highlights
        </div>

        <div 
          style={{ 
            display: "flex", 
            gap: "20px", 
            flexWrap: "wrap",
            marginBottom: "20px"
          }}
          className="highlights-top-section"
        >
          {/* Air Quality Index */}
          <div
            style={{
              flex: "1",
              minWidth: "0",
              backgroundColor: "#374151",
              borderRadius: "1rem",
              padding: "20px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            }}
            className="aqi-card"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                flexWrap: "wrap",
                gap: "10px"
              }}
            >
              <p style={{ fontSize: "18px", fontWeight: "500", margin: "0" }}>Air Quality Index</p>
              <div
                style={{
                  backgroundColor: aqiInfo.color,
                  color: "white",
                  padding: "5px 12px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {aqiInfo.text}
              </div>
            </div>

            {/* AQI Value */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <AirIcon style={{ fontSize: "40px", color: aqiInfo.color }} />
              <span style={{ fontSize: "32px", fontWeight: "700" }}>
                {airQualityIndex}
              </span>
            </div>

            {/* Pollutants */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
                gap: "15px",
                textAlign: "center",
              }}
              className="pollutants-grid"
            >
              <div>
                <p style={{ fontWeight: "600", marginBottom: "5px", margin: "0 0 5px 0" }}>CO</p>
                <p style={{ fontSize: "14px", margin: "0" }}>{co} µg/m³</p>
              </div>
              <div>
                <p style={{ fontWeight: "600", marginBottom: "5px", margin: "0 0 5px 0" }}>NO</p>
                <p style={{ fontSize: "14px", margin: "0" }}>{no} µg/m³</p>
              </div>
              <div>
                <p style={{ fontWeight: "600", marginBottom: "5px", margin: "0 0 5px 0" }}>NO₂</p>
                <p style={{ fontSize: "14px", margin: "0" }}>{no2} µg/m³</p>
              </div>
              <div>
                <p style={{ fontWeight: "600", marginBottom: "5px", margin: "0 0 5px 0" }}>O₃</p>
                <p style={{ fontSize: "14px", margin: "0" }}>{o3} µg/m³</p>
              </div>
            </div>
          </div>

          {/* Sunrise & Sunset */}
          <div
            style={{
              flex: "1",
              minWidth: "0",
              backgroundColor: "#374151",
              borderRadius: "1rem",
              padding: "20px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            }}
            className="sunrise-sunset-card"
          >
            <p style={{ fontSize: "18px", fontWeight: "500", marginBottom: "20px", margin: "0 0 20px 0" }}>
              Sunrise & Sunset
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "20px"
              }}
              className="sun-times-container"
            >
              <div style={{ textAlign: "center", flex: "1" }}>
                <WbSunnyIcon style={{ fontSize: "40px", color: "#FFD54F" }} />
                <p style={{ fontSize: "16px", fontWeight: "600", marginTop: "8px", margin: "8px 0 0 0" }}>
                  {new Date(sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div style={{ textAlign: "center", flex: "1" }}>
                <NightsStayIcon style={{ fontSize: "40px", color: "#90CAF9" }} />
                <p style={{ fontSize: "16px", fontWeight: "600", marginTop: "8px", margin: "8px 0 0 0" }}>
                  {new Date(sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "15px",
          }}
          className="bottom-highlights"
        >
          {highlights.map((highlight, index) => (
            <HighlightBox
              key={index}
              title={highlight.title}
              value={highlight.value}
              Icon={highlight.Icon}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .today-highlights-container {
            padding: 16px !important;
          }
          
          .highlights-top-section {
            gap: 16px !important;
          }
          
          .aqi-card, .sunrise-sunset-card {
            min-width: 0 !important;
            flex: 1 1 100% !important;
            padding: 16px !important;
          }
          
          .pollutants-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          
          .bottom-highlights {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          .today-highlights-container {
            padding: 12px !important;
          }
          
          .highlights-top-section {
            flex-direction: column !important;
          }
          
          .aqi-card, .sunrise-sunset-card {
            min-width: 0 !important;
            width: 100% !important;
            flex: none !important;
          }
          
          .sun-times-container {
            gap: 15px !important;
          }
          
          .bottom-highlights {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .aqi-card, .sunrise-sunset-card {
            min-width: 250px !important;
          }
        }
        
        @media (min-width: 1025px) {
          .aqi-card, .sunrise-sunset-card {
            min-width: 280px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TodayHighlights;