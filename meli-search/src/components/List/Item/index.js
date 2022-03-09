function Item(props) {

  // las props vienen del comp List 
 const {thumbnail, title} = props.data
  return (
    <>
    <div className="item-container">
      <img src={thumbnail} alt="item pic" className="item-pic"/>
      <p className="item-title"> {title}</p>
    </div>
    </>
  );
}

export default Item;
