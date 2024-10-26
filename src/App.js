import { RouterProvider } from "react-router-dom";
import { routes } from './routes/routes';
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";

function App() {
  // Check system theme on initial load
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const [MyMOde, setmyMOde] = useState(
    localStorage.getItem("currentMode") || (systemPrefersDark ? "dark" : "light")
  );

  useEffect(() => {
    // Save user preference in local storage on mode change
    localStorage.setItem("currentMode", MyMOde);
  }, [MyMOde]);

  const theme = createTheme({
    palette: {
      mode: MyMOde,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes(setmyMOde)} />
    </ThemeProvider>
  );
}

export default App;
