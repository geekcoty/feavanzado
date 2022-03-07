import Item from "../List/Item"

import {useEffect, useState} from "react";

function List(props) {
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
    //pasamos por props data=item para mostrar la img y el title en el comp Item
    //hacemos un filter y el rdo de ese filter (un array), lo mapeamos
  return (
    <>

    {items.filter((item) =>{
      return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
    })
    .map((item, key)=> {return <Item data={item} key={item.id ? item.id : key}/>
  })}
    </>
  );
}

export default List;
