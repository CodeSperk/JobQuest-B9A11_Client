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
import PrivateRoute from './PrivateRoute';
import JobDetails from '../components/Pages/JobDetails/JobDetails';
import ErrorPage from '../components/Pages/Error/ErrorPage';
import UpdateJob from '../components/Pages/updateJob/UpdateJob';

const Routes = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    errorElement:<ErrorPage />,
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
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
      },
      {
        path:"/addJobs",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"/myJobs",
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>
      },
      {
        path:"/blogs",
        element: <Blog></Blog>
      }
    ]
  }
])

export default Routes;