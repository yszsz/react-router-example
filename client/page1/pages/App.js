import React from 'react';
import { Link } from 'react-router';
import NavLink from '../NavLink';

export default React.createClass({
	render() {
		return (
			<div>
				<h1>React Router Tutorial</h1>
				<ul role='nav'>
					// <li><Link to="/about">About</Link></li>
					// <li><Link to="/repos">Repos</Link></li>
					<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})