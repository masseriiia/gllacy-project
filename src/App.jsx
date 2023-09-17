import './App.css'
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import React from "react";
import axios from "axios";

export const AppContext = React.createContext('')

function App() {
    const [items, setItems] = React.useState([])
    const [cartCatalog, setCartCatalog] = React.useState({})


    React.useEffect(() => {
        axios.get("https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/items")
            .then(res => setItems(res.data))
        axios.get("https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/cart")
            .then(res => setItems(res.data))
    },[])

    const onAddToCart = (id) => {
        console.log(id)
        if(cartCatalog[id]) {
            setCartCatalog({...cartCatalog, [id]: {amount: cartCatalog[id].amount + 1}})
        } else {
            setCartCatalog({...cartCatalog, [id]: 1})
        }
        console.log(cartCatalog)
    }

  return (
      <BrowserRouter>
          <div className="App">
              <AppContext.Provider value={{items, setItems, cartCatalog, onAddToCart}}>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/catalog" element={<Catalog/>}/>
                  </Routes>
              </AppContext.Provider>
          </div>
      </BrowserRouter>
  )
}

export default App
