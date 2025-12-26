import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Hero from './hero.jsx'
import ThemeToggle from './ThemeToggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/> 
    <ThemeToggle/>
  </StrictMode>
)
