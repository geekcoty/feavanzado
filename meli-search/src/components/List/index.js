import Item from "../List/Item"

import {useEffect, useState} from "react";

function List() {
   const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems();

  },[])

  async function fetchItems() {
      const dataItems = await fetch ("https://api.mercadolibre.com/sites/MLA/search?q=tablets")
      const itemsJson = await dataItems.json(); 

      setItems(itemsJson.results)
      

    }
  
    //para mostrar los resultados lo hacemos con un map
  return (
    <>
   {items.map(( item ,key ) => {
     return <Item data={item} key={item.id ? item.id : key}/>
   })}
    </>
  );
}

export default List;