import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
      setSearchCity(""); // Clear search after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <>
      <nav
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#bebfc1ff",
          flexWrap: "wrap",
          gap: "12px",
          boxSizing: "border-box",
          width: "100%"
        }}
        className="navbar-container"
      >
        {/* Logo Section */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            minWidth: "fit-content"
          }}
          className="logo-section"
        >
          <FilterDramaTwoToneIcon 
            style={{ 
              fontSize: "24px", 
              color: "white",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
            }}
            className="logo-icon"
          />
          <p 
            style={{ 
              fontWeight: "bold", 
              fontSize: "20px", 
              margin: "0",
              color: "white",
              whiteSpace: "nowrap",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              letterSpacing: "0.5px"
            }}
            className="logo-text"
          >
            Weather
          </p>
        </div>

        {/* Search Section */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            flex: "1",
            justifyContent: "flex-end",
            minWidth: "200px"
          }}
          className="search-section"
        >
          <TextField
            variant="outlined"
            placeholder="Search city..."
            size="small"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "2rem",
              minWidth: "200px",
              maxWidth: "400px",
              flex: "1",
              backdropFilter: "blur(10px)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
            }}
            className="search-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#6B7280" }} />
                </InputAdornment>
              ),
              style: {
                borderRadius: "2rem",
                paddingRight: "8px",
                backgroundColor: "transparent"
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '2rem',
                border: 'none',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                },
              },
            }}
          />
          
          {/* Desktop Search Button */}
          <Button
            variant="contained"
            onClick={handleSearchClick}
            style={{ 
              borderRadius: "8px",
              background: "linear-gradient(45deg, #4B5550 30%, #5a6b5d 90%)",
              textTransform: 'none',
              fontWeight: '600',
              minWidth: 'auto',
              padding: '8px 20px',
              boxShadow: "0 3px 10px rgba(75, 85, 80, 0.3)",
              color: "white",
              transition: "all 0.3s ease"
            }}
            className="search-button-desktop"
            sx={{
              '&:hover': {
                background: 'linear-gradient(45deg, #374151 30%, #4B5550 90%)',
                boxShadow: "0 4px 15px rgba(75, 85, 80, 0.4)",
                transform: "translateY(-1px)"
              }
            }}
          >
            Search
          </Button>

          {/* Mobile Search Button */}
          <IconButton
            onClick={handleSearchClick}
            style={{
              background: "linear-gradient(45deg, #4B5550 30%, #5a6b5d 90%)",
              color: 'white',
              padding: '10px',
              display: 'none',
              boxShadow: "0 3px 10px rgba(75, 85, 80, 0.3)",
              transition: "all 0.3s ease"
            }}
            className="search-button-mobile"
            sx={{
              '&:hover': {
                background: 'linear-gradient(45deg, #374151 30%, #4B5550 90%)',
                boxShadow: "0 4px 15px rgba(75, 85, 80, 0.4)",
                transform: "translateY(-1px)"
              }
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-container {
            padding: 10px 16px !important;
            gap: 10px !important;
          }
          
          .logo-section {
            gap: 6px !important;
          }
          
          .logo-icon {
            font-size: 22px !important;
          }
          
          .logo-text {
            font-size: 18px !important;
          }
          
          .search-section {
            gap: 6px !important;
            min-width: 150px !important;
          }
          
          .search-input {
            min-width: 150px !important;
            max-width: 250px !important;
          }
          
          .search-button-desktop {
            padding: 6px 16px !important;
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 600px) {
          .navbar-container {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 12px 16px !important;
            gap: 12px !important;
          }
          
          .logo-section {
            justify-content: center !important;
            width: 100% !important;
          }
          
          .search-section {
            justify-content: center !important;
            width: 100% !important;
            min-width: unset !important;
          }
          
          .search-input {
            min-width: unset !important;
            max-width: unset !important;
            flex: 1 !important;
          }
        }
        
        @media (max-width: 480px) {
          .navbar-container {
            padding: 10px 12px !important;
          }
          
          .search-section {
            gap: 4px !important;
          }
          
          .search-button-desktop {
            display: none !important;
          }
          
          .search-button-mobile {
            display: flex !important;
          }
          
          .search-input input::placeholder {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 360px) {
          .logo-text {
            font-size: 16px !important;
          }
          
          .logo-icon {
            font-size: 20px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .navbar-container {
            padding: 16px 40px !important;
          }
          
          .search-input {
            min-width: 300px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;