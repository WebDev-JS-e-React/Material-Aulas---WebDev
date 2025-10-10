import {createBrowserRouter} from 'react-router-dom'
import App from'../App.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'

export const router = createBrowserRouter([
    {
     path:'/',
     element:<App/>,
     children: [
         {
        index: true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
     ]
},
])


