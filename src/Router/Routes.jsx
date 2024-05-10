import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import RootLayout from '../Layouts/RootLayout';
import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Register/Register';

const Routes = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
])

export default Routes;