import React from 'react';
import { Link } from 'react-router';

import marked from 'marked';

export default class Article extends React.Component {
	render() {
		const { title, content, id } = this.props;
		return (
			<div className="col-md-4">
				<h3>{title}</h3>
				<p>{content}</p>
				<p><Link to="archives" className="btn btn-link">Continue Reading...</Link></p>
			</div>
		);
	}
}