import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PreLandingPage from './view/Pre-LandingPage';
import LandingPage from './view/LandingPage';
const router = createBrowserRouter([
  {
    path:"/",
    element: <PreLandingPage/>,
  },
  {
    path:"/landing-page",
    element: <LandingPage/>,
  },
])
const App =()=>{
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App