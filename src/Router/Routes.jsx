import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import RootLayout from '../Layouts/RootLayout';
import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Register/Register';
import Jobs from '../components/Pages/AllJobs/Jobs';
import AppliedJobs from '../components/Pages/AppliedJobs/AppliedJobs';
import AddJob from '../components/Pages/AddJobs/AddJob';
import MyJobs from '../components/Pages/MyJobs/MyJobs';
import Blog from '../components/Pages/Blog/Blog';

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
      },
      {
        path:"/allJobs",
        element:<Jobs></Jobs>
      },
      {
        path:"/appliedJobs", 
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"/addJobs",
        element: <AddJob></AddJob>, 
      },
      {
        path:"/myJobs",
        element:<MyJobs></MyJobs>
      },
      {
        path:"/blogs",
        element: <Blog></Blog>
      }
    ]
  }
])

export default Routes;