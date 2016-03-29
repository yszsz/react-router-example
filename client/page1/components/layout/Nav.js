import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const indexClass = location.pathname === '/' ? 'active' : '';
		const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
		const contactClass = location.pathname.match(/^\/contact/) ? 'active' : '';
		const navClass = collapsed ? 'collapse' : '';

		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">React Router</a>
					</div>
					<div id="navbar" className={'navbar-collapse ' + navClass}>
						<ul className="nav navbar-nav">
							<li className={indexClass}>
								<IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
							</li>
							<li className={archivesClass}>
								<Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
							</li>
							<li className={contactClass}>
								<Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}