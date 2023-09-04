import './App.css'
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/catalog" element={<Catalog/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
