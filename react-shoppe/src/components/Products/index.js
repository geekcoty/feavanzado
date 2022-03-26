import productData from "../../data/products.json"

import BigBox from "../BigBox"
import SmallBox from "../SmallBox"

import "../../app.scss"

function Products() {
  const [first, second, third] = productData;
  return (
    <>
      <div className="big-container">
      <BigBox data={first} />
      </div>
      <div className="small-container">
      <SmallBox data={second} />
      <SmallBox data={third} />
      </div>
    </>
  );
}

export default Products