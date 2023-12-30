import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navBar/navBar.jsx'
import SearchBar from './components/searchBar/searchBar.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './components/landing/Landing.jsx'
import LandBody from './components/landBody/landBody.jsx'
import ChatPage from './components/chatBody/layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Landing/>}/>
      <Route path = '/chat' element = {<ChatPage/>}/>
    </Routes>
    {/* <Landing/> */}
    {/* <SearchBar/> */}

    </BrowserRouter>
  )
}

export default App
