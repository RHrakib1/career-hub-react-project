import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Header from './Component/Header/Header.jsx';
import Home from './Component/Home/Home.jsx';
import Jobs from './Component/Jobs/Jobs.jsx';
import Applid from './Component/Applied/Applid.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import Statitics from './Statitics/Statitics.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Header></Header>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <Applid></Applid>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/statitics',
        element: <Statitics></Statitics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
