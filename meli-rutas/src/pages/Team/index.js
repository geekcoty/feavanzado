import React from 'react';

class Team extends React.Component {
	async componentDidMount() {
		const { id } = this.props.match.params;
		const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

		const json = await data.json();
		console.log(json);
	}


	render() {
		return(
			<p>hola</p>
		)
	}
}

export default Team;
