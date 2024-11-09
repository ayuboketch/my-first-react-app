import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import Food from './Food.jsx'
import NavBar from './NavBar.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NavBar /> */}
    <App />
    {/* <Greeting /> */}
    {/* <Food /> */}
    {/* <Test /> */}
  </StrictMode>,
)
