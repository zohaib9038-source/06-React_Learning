import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Product=lazy(()=>import('./components/Product.jsx'))
const User=lazy(()=>import('./components/User.jsx'))
const Contact=lazy(()=>import('./components/Contact.jsx'))
const About=lazy(()=>import('./components/About.jsx'))
const Homes=lazy(()=>import('./components/Homes.jsx'))
const Laptop=lazy(()=>import('./components/Laptop.jsx'))
const Phone=lazy(()=>import('./components/Phone.jsx'))
let root=createRoot(document.getElementById('root'));
let router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homes/>
      },
      {
        path:"about",
        element:<About/>
      },  
       {
        path:"contact",
        element:<Contact/>
      },
       {
        path:"user/:id",
        element:<User/>
      },
       {
        path:"product",
        element:<Product/>,
        children:[
          {
            path:"laptop",
            element:<Laptop/>
          },
          {
            path:"phone",
            element:<Phone/>
          }
        ]
      }
    ]
   }
]);
root.render(
  <Suspense fallback={"loading...."}>
      <RouterProvider router={router} />
  </Suspense>

)
