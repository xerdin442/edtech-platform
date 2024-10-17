import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
// import PreLandingPage from './view/Pre-LandingPage';
// import LandingPage from './view/LandingPage';
import SignUp from './view/SignUp';
const router = createBrowserRouter([
  {
    path:"/",
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