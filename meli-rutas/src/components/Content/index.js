import Card from './Card/';
import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import './contentStyles.scss';

function Content(props) {
	const [ items, setItems ] = useState([]);
	const {site} = useParams();

	useEffect(() => {
		fetchItems();
	}, []);

		async function fetchItems() {
		const dataItems = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=tablets&limit=6`);
		const itemsJson = await dataItems.json();

		setItems(itemsJson.results);
	}
	return (
		<div className="content-container">
			<span className="content-title">Basado en tu última visita</span>
			<span className="content-subtitle"> Ver Historial</span>
			<div className="card-container">
				{items
					.filter((item) => {
						return item.title.toLowerCase().includes(props.searchParam.toLowerCase());
					})
					.map((item, key) => {
						return <Card data={item} key={item.id ? item.id : key} />;
					})}
				);
			</div>
		</div>
	)
}
export default Content;
