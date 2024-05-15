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
import Blank from "./routes/blank";
import Home from "./routes/home";
import About from "./routes/about";
import Rayner from "./routes/rayner";
import Marc from "./routes/marc";
import Bjorn from "./routes/bjorn";
import Jonash from "./routes/jonash";
import Marco from "./routes/marco";
import JeromeAganon from "./routes/jerome-aganon";
import Anna from "./routes/anna";
import Analyn from "./routes/analyn";
import Norman from "./routes/norman";
import Josephine from "./routes/josephine";
import Allison from "./routes/allison";
import JeromeMamangun from "./routes/jerome-mamangun";
import Hans from "./routes/hans";
import Mermann from "./routes/mermann";
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
      {
        path: "rayner-lorenzo",
        element: <Rayner />,
      },
      {
        path: "marc-bundalian",
        element: <Marc />,
      },
      {
        path: "bjorn-mayrina",
        element: <Bjorn />,
      },
      {
        path: "jonash-bundalian",
        element: <Jonash />,
      },
      {
        path: "jerome-aganon",
        element: <JeromeAganon />,
      },
      {
        path: "anna-marcelo",
        element: <Anna />,
      },
      {
        path: "analyn-ruelo",
        element: <Analyn />,
      },
      {
        path: "norman-aguilar",
        element: <Norman />,
      },
      {
        path: "josephine-bendijo",
        element: <Josephine />,
      },
      {
        path: "allison-bundalian",
        element: <Allison />,
      },
      {
        path: "jerome-mamangun",
        element: <JeromeMamangun />,
      },
    ],
  },
  {
    path: "/",
    element: <Blank />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "marco-gregorio",
        element: <Marco />,
      },
      {
        path: "hans-magpantay",
        element: <Hans />,
      },
      {
        path: "mermann-flores",
        element: <Mermann />,
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
