import { RouterProvider } from "react-router-dom";
import { routes } from './routes/routes'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
      </ThemeProvider>
   </>
  );
}

export default App;
