function Card(props) {
 const {thumbnail, title} = props.data
  return (
    <div className="card-container">
            <img src={thumbnail} alt="item pic" className="item-pic"/>
      <p className="item-title"> {title}</p>
    </div>
  );
}

export default Card;
