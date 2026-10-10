import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginQuiz from './components/LoginQuiz.jsx'
import StartQuiz from './components/StartQuiz.jsx'
import QuizCompleted from './components/QuizCompleted.jsx'
import DashBoard from './components/DashBoard.jsx'

let router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<LoginQuiz/>
      },
      {
        path:'quiz',
        element:<StartQuiz/>
      },
      {
        path:"completed",
        element:<QuizCompleted/>
      },
      {
        path:"dashboard",
        element:<DashBoard/>
      }
    ]
  },

]);
let root=createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)