import {useContext} from "react"
import ProductContext from "../../../context/Product"

function Checkout() {
    const { products, totalPrice } = useContext(ProductContext);
  return (
  <ul>
      <li>Cantidad: {products.length}</li>
      <li>Precio total: {totalPrice}</li>
    </ul>
  )
}

export default Checkout