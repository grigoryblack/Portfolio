import { Route, Routes } from 'react-router-dom'
import MainPage from "./content/MainPage/index.js";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
