import React from "react";
import return_img from "./return1.png";

export default class Header extends React.Component {
	render() {
		const div_style = {
			background: '#000',
			height: 60,
			lineHeight: '60px',
			marginLet: 20,
			color: '#fff',
			textAlign: 'center',
			position: 'relative'
		}

		const img_style = {
			position: 'absolute',
			left: 20,
			top: 14
		}
		return (
			<div style={div_style}>
				<img style={img_style} src={return_img} alt='return'/>
				<span>{this.props.title}</span>
			</div>
		)

	}
}