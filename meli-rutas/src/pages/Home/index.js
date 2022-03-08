import logo from '../../assets/meli.jpeg';

import "./homeStyle.scss";

import sites from '../../data/meli.json';

import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home-container">
			<div className="logo-div">
				<img src={logo} alt="meli logo" className="logo" />
			</div>
			<div className="link-div" />
				<ul className="link-list">
				{sites.map((site, key) => {
					return (
						<li>
							<Link to={`/search/${site.site}`} className="link">
								<img src={site.flag} className="country-flag" alt="country flag" />
								{site.name}
							</Link>
						</li>
					);
				})}
				</ul>
		</div>
	);
}

export default Home;
