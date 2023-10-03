import './App.css'
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import React from "react";
import axios from "axios";

export const AppContext = React.createContext('')

const findItem = (items, id) => items.find((item) => item.id === id)

function App() {
    const [items, setItems] = React.useState([])
    const [cartCatalog, setCartCatalog] = React.useState(
        {
            itemsCard: {},
            amountPrice: 0
        }
    )

    React.useEffect(() => {
        axios.get(`https://64d8ebd15f9bf5b879ceb2cd.mockapi.io/items`)
            .then(res => setItems(res.data))
    },[])

    const onAddToCart = (id) => {
        console.log(id)
        const item = findItem(items, id)
        console.log(item)
        if(cartCatalog.itemsCard[id]) {
            setCartCatalog({
                itemsCard: {
                    ...cartCatalog.itemsCard,
                    [id]: {...item, amount: cartCatalog.itemsCard[id].amount + 1}
                },
                amountPrice: cartCatalog.amountPrice + item.price
            })
        } else {
            setCartCatalog({
                itemsCard: {
                    ...cartCatalog.itemsCard,
                    [id]: {...item, amount: 1}
                },
                amountPrice: cartCatalog.amountPrice + item.price
            })
        }
        console.log(cartCatalog)
    }
    const onRemoveToCart = (id) => {
        const items = {...cartCatalog.itemsCard}
        const itemPrice = cartCatalog.itemsCard[id].price * cartCatalog.itemsCard[id].amount
        delete items[id]
        setCartCatalog({itemsCard: items, amountPrice: cartCatalog.amountPrice - itemPrice})

    }

  return (
      <BrowserRouter>
          <div className="App">
              <AppContext.Provider value={{items, setItems, cartCatalog, onAddToCart, onRemoveToCart, }}>
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
