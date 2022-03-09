import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TeamInfo from "../../components/TeamInfo"

function Team() {

	return (
		<div className="team">
			<Navbar />
			<p>soy la page Team </p>
			<TeamInfo />
			<Footer />
		</div>
	);
}

export default Team;