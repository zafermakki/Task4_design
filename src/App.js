import { RouterProvider } from "react-router-dom";
import { routes } from './routes/routes';
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import i18n from "./i18n";

function App() {
  // Check system theme on initial load
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [MyMode, setMyMode] = useState(
    localStorage.getItem("currentMode") || (systemPrefersDark ? "dark" : "light")
  );

  // Retrieve initial RTL setting from localStorage or set based on i18n language
  const initialIsRTL = localStorage.getItem("isRTL") === "true" || i18n.language === 'ar';
  const [isRTL, setIsRTL] = useState(initialIsRTL);

  useEffect(() => {
    // Save user preference in local storage on mode change
    localStorage.setItem("currentMode", MyMode);
  }, [MyMode]);

  useEffect(() => {
    // Set the document direction on load and language change
    const handleLanguageChange = (lng) => {
      const rtl = lng === 'ar';
      setIsRTL(rtl);
      localStorage.setItem("isRTL", rtl); // Store RTL setting in localStorage
      document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    };

    // Apply direction on component mount
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup listener on component unmount
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [isRTL]);

  const theme = createTheme({
    palette: {
      mode: MyMode,
    },
    direction: isRTL ? "rtl" : "ltr",
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes(setMyMode)} />
    </ThemeProvider>
  );
}

export default App;
