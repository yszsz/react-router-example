import React, {Component, PropTypes } from 'react';

calss Button extends Component {
	handleClick(e) {
		this.props.action();
	}
	render() {
		return (
			<button onClick={ this.handleClick.bind(this)}>{ this.props.name }</button>
		)
	}
}

export default Button;