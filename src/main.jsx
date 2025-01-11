import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './route/Root.jsx';
import Home from './route/Home.jsx';
import Services from './route/Services.jsx';
import Work from './route/Work.jsx';
import About from './route/About.jsx';
import Contact from './route/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/work",
        element: <Work/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
