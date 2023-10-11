import React from "react";
import './App.css'
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
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
    const [fatsSort, setFatsSort] = React.useState()
    const [fillersSort, setFillersSort] = React.useState([])
    const [sortType, setSortType] = React.useState([])

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

    const handleChangeType = (value) => {
        console.log(value)
        if (!sortType.includes(value)) {
            setSortType([...sortType, items.sort()])
        }
        console.log(sortType)
    }

    const handleChange = (value) => {
        console.log(value)
    }

    const handleFatsSort = (value) => {
        setFatsSort(value)
        console.log(fatsSort)
    }

    const handleFillersSort = (value) => {
        if (!fillersSort.includes(value)) {
            setFillersSort([...fillersSort, value])
        } else {
            fillersSort.splice( fillersSort.indexOf(value), 1)
            setFillersSort([...fillersSort])
        }
    }

  return (
      <BrowserRouter>
          <div className="App">
              <AppContext.Provider value={{items, setItems, fatsSort, fillersSort, cartCatalog, onAddToCart, onRemoveToCart, handleChange, handleFatsSort, handleFillersSort, handleChangeType}}>
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
