import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, createHashRouter} from 'react-router-dom';
import ErrorPage from "./pages/ErrorPage";
import Home from './pages/Home/Home';
import ConstructionBlocks from "./pages/construction-blocks/ConstructionBlocks";
import {TopNavigation} from "./web-components/navigation/top-navigation/TopNavigation";
import CrossSection from "./pages/cross-section/CrossSection";

const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/construction-blocks",
            element: <ConstructionBlocks />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/cross-section",
            element: <CrossSection />,
            errorElement: <ErrorPage />,
        }
    ]
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
