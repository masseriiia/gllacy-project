import './App.css'
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/catalog" element={<Catalog/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
