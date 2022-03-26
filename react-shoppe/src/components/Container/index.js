import Checkout from "./Checkout"
import List from "./List"

import  "./container.scss"

function Container() {
  return (
    <div className="list-container">
    <List/>
   <Checkout/>
   </div>
  )
}

export default Container