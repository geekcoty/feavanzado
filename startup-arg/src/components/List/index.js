import data from "../../data/startups.json"
import Item from "../List/Item"
function List(props){

  
    //para mostrar los resultados lo hacemos con un map
    //pasamos por props data=item para mostrar la img y el title en el comp Item
    //hacemos un filter y el rdo de ese filter (un array), lo mapeamos
  return (
    <>
      {data.filter((startup) =>
          startup.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .map((startup, key) => {
          return <Item data={startup} key={key} />;
        })}
    </>
  );
}

export default List