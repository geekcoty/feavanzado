import {useContext} from "react"
import ProductContext from "../../../context/Product"
function List() {
  const {products} = useContext(ProductContext)
  return (
   <ul>
      {products.map((product, key) => {
        const { name, price } = product;
        return (
          <li key={key}>
            {name} - ${price}
          </li>
        );
      })}
    </ul>
  )
}

export default List