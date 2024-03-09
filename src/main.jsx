import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolate from './components/AddChocolate.jsx';
import UpdateChocolate from './components/UpdateChocolate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://chocolate-management-system-server-beta.vercel.app/chocolates')
  },
  {
    path: '/addChocolate',
    element: <AddChocolate></AddChocolate>,
    
  },
  {
    path: 'updateChocolate/:id',
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({params}) => fetch(`https://chocolate-management-system-server-beta.vercel.app/chocolates/${params.id}`)
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
