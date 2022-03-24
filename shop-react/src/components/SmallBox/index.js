import { useContext } from 'react';
import ProductContext from '../../context/Product';

function SmallBox({ data }) {
	const { handleProducts} = useContext(ProductContext);
	const { name } = data;
	return <div onClick={() => handleProducts(data)}>{name}</div>;
}

export default SmallBox;
