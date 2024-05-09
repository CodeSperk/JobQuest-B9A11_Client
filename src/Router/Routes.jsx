import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import RootLayout from '../Layouts/RootLayout';

const Routes = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    children:[
      {
        path:"/",
        element:<Home />,
      }
    ]
  }
])

export default Routes;