import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PreLandingPage from './view/Pre-LandingPage';
import LandingPage from './view/LandingPage';
import SignUp from './view/SignUp';
// import Opt from './view/Opt';
// import DashBoard from './view/Dashboard';
const router = createBrowserRouter([
  {
    path:"/",
    element: <PreLandingPage/>,
  },

  {
    path:"/landing-page",
    element: <LandingPage/>,
  },
  
  {
    path:"/sign-up",
    element: <SignUp/>,
  },
  // {
  //   path:"/landing-page",
  //   element: <SignUp/>,
  // },
])
const App =()=>{
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App