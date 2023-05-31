import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/Products/ProductList'
import ProductListContainer from './Components/Products/ProductListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductDetailContainer from './Components/Products/Detail/ProductDetailContainer'
import CartListContainer from './Components/Cart/CartListContainer'
import AppContext from './Components/Context/AppContext'
import OrderListContainer from './Components/Order/OrderListContainer'
import SearchListContainer from './Components/Products/Search/SearchListContainer'
import Footer from './Components/Footer/Footer'
import FinishPurchase from './Components/Order/OrderFinishContainer'
import OrderFinished from './Components/Order/Modal/OrderFinished'
import AllReviewListContainer from './Components/Reviews/AllReviewListContainer'

function App() {
  return (
    <>
    <AppContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductListContainer />}/>
          <Route path='/category/:category' element={<ProductListContainer />}/>
          <Route path='/detail/:id' element={<ProductDetailContainer/>}/>
          <Route path='/cart' element={<CartListContainer />} />
           <Route path='/order' element={<OrderListContainer />} />
           <Route path='/order/finish' element={< FinishPurchase />} />
           <Route path='/order/done' element={< OrderFinished />} />
           <Route path='/search' element={<SearchListContainer />} />
          <Route path='/' element={<ProductListContainer />}/>
          <Route path='/reviews' element={<AllReviewListContainer />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext>
    </>
  )
}

export default App
