import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export function getContext(){ 
    return useContext(Context)
}

const AppContext = ({children}) => {

  //Cart-list use state
  const [cartList, setCartList] = useState(getProductInCart())
  const [searchName, setSearchName] = useState("")


  //Bring the products from the local storage
  function getProductInCart(){ 
    const cart = localStorage.getItem("cart")
    if(!cart) localStorage.setItem("cart", "[]")
    return JSON.parse(cart)
  }

  function addProductItem(id){ 
    let cart = localStorage.getItem("cart")
    let cartConverted =  JSON.parse(cart)
     let foundProduct = cartConverted.findIndex(productSaved => productSaved.id == id);
      cartConverted[foundProduct].units = cartConverted[foundProduct].units + 1; 

      setCartList(cartConverted)
      localStorage.setItem("cart", JSON.stringify(cartConverted))
  }

  function removeProductItem(id){ 
    let cart = localStorage.getItem("cart")
    let cartConverted =  JSON.parse(cart)

    
    let foundProduct = cartConverted.findIndex(productSaved => productSaved.id == id);
    if(cartConverted[foundProduct].units <= 1){ 
      removeProductInCart(id)
    }else { 
      cartConverted[foundProduct].units = cartConverted[foundProduct].units - 1; 

      setCartList(cartConverted)
      localStorage.setItem("cart", JSON.stringify(cartConverted))
    }
  }

  //Add products 
  function addProductInCart(product){ 
    let cart = localStorage.getItem("cart")
    let cartConverted =  JSON.parse(cart)

    let productExits = cartConverted.find((productSaved) => productSaved.id === product.id)
    if(productExits != undefined){ 
      let foundProduct = cartConverted.findIndex(productSaved => productSaved.id == product.id);
      cartConverted[foundProduct].units = cartConverted[foundProduct].units + product.units; 
      setCartList(cartConverted)
      localStorage.setItem("cart", JSON.stringify(cartConverted))
    }else { 
        cartConverted.push(product)
        setCartList(cartConverted)
        localStorage.setItem("cart", JSON.stringify(cartConverted))
    }
  }

  function removeProductInCart(productId){ 
    let cart = localStorage.getItem("cart")
    let cartConverted =  JSON.parse(cart)

    cartConverted = cartConverted.filter((product) => product.id !== productId)
    setCartList(cartConverted)
    localStorage.setItem("cart", JSON.stringify(cartConverted))
  }

  function clearCart(){ 
    let cart = localStorage.getItem("cart")
    let cartConverted =  JSON.parse(cart)

    cartConverted = []
    setCartList(cartConverted)
    localStorage.setItem("cart", JSON.stringify(cartConverted))
  }



  function totalPrice(){ 
    let total = 0
    cartList.forEach((product) => { 
      total += (product.units * product.price);
    })

    return total
  }

  return (
    <>
    <Context.Provider value={{
      getProductInCart, 
      addProductInCart, 
      removeProductInCart, 
      clearCart, 
      cartList, 
      addProductItem, 
      removeProductItem, 
      searchName, 
      setSearchName,
      totalPrice
    }}>
        {children}
    </Context.Provider>
    </>
  )
}

export default AppContext