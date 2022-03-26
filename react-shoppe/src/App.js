import Nav from "./components/Nav"
import Products from "./components/Products"
import Container from "./components/Container"

import {ToggleProvider} from "./context/Toggle";
import {ProductProvider} from "./context/Product"
import { useState } from "react";

function App() {
  
  const [toggle, setToggle] = useState(true)
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 
  // toggle para ver el carrito
  function handleToggle(){
   setToggle((prevState)=> !prevState)
  }

  const contextValue={
    toggle:true,
    handleToggle: handleToggle
  }

// agregar al carrito y mostrar el precio total
  function handleProducts(data){
    setTotalPrice((prevState) => prevState + data.price)
    setProducts((prevState) => [...prevState, data])
  }

  //calculo del precio

  const contextProduct={
    products: products,
    totalPrice: totalPrice,
    handleProducts: handleProducts
  };
  return (
  <>
    <ToggleProvider value={contextValue}> 
      <Nav/>
        <ProductProvider value ={contextProduct}>
        <div className="product-container">
        <Products />
        </div>
      <div className="totals-container">
        { toggle && <Container/> }
      </div>
      </ProductProvider>
    </ToggleProvider>
  </>

  );
}

export default App;
