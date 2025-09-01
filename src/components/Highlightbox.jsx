import React from "react";

// Define the props type for the HighlightBox component
const HighlightBox = ({ title, value, Icon }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#374151",
          color: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          width: "100%",
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        className="highlight-box"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div style={{ width: "100%" }}>
          <div 
            style={{ 
              fontSize: "16px", 
              marginBottom: "8px",
              fontWeight: "500",
              color: "#D1D5DB"
            }}
            className="highlight-title"
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px"
            }}
            className="highlight-content"
          >
            <Icon 
              style={{ 
                fontSize: "28px",
                color: "#9CA3AF",
                flexShrink: "0"
              }} 
              className="highlight-icon"
            />
            <p 
              style={{ 
                fontSize: "24px", 
                fontWeight: "bold",
                margin: "0",
                textAlign: "right",
                wordBreak: "break-word"
              }}
              className="highlight-value"
            >
              {value}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .highlight-box {
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .highlight-box {
            padding: 0.75rem !important;
            min-height: 70px !important;
          }
          
          .highlight-title {
            font-size: 14px !important;
            margin-bottom: 6px !important;
          }
          
          .highlight-icon {
            font-size: 24px !important;
          }
          
          .highlight-value {
            font-size: 20px !important;
          }
          
          .highlight-content {
            gap: 6px !important;
          }
        }
        
        @media (max-width: 480px) {
          .highlight-box {
            padding: 0.5rem !important;
            min-height: 60px !important;
          }
          
          .highlight-title {
            font-size: 13px !important;
            margin-bottom: 4px !important;
          }
          
          .highlight-icon {
            font-size: 20px !important;
          }
          
          .highlight-value {
            font-size: 18px !important;
          }
          
          .highlight-content {
            gap: 4px !important;
          }
        }
        
        @media (max-width: 360px) {
          .highlight-box {
            padding: 0.4rem !important;
            min-height: 55px !important;
          }
          
          .highlight-title {
            font-size: 12px !important;
          }
          
          .highlight-icon {
            font-size: 18px !important;
          }
          
          .highlight-value {
            font-size: 16px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .highlight-box {
            padding: 1.25rem !important;
            min-height: 90px !important;
          }
          
          .highlight-title {
            font-size: 17px !important;
          }
          
          .highlight-icon {
            font-size: 32px !important;
          }
          
          .highlight-value {
            font-size: 26px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HighlightBox;