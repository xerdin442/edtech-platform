import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/variable.css'
import './css/preLoading.css'
import './css/landingPage.css'
import './css/footer.css'
import './css/SignUp.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
