import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fontsource/roboto-condensed';
import './index.css'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Condensed',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#E3C263',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>,
)
