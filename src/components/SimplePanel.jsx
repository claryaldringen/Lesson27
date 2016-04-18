var React = require('react');

class SimplePanel extends React.Component{

	render() {

		var spanStyle =  this.props.hintStyle ? this.props.hintStyle : {color: '#b2b3b3'};
		var hStyle = this.props.headerStyle ? this.props.headerStyle : {};
		var style = this.props.style ? this.props.style : {};

		return(
			<div className="panel panel-default">
				<div style={style} className="panel-body">
					<h2 style={hStyle}>{this.props.caption}</h2>
					<span style={spanStyle}>{this.props.hint}</span>
					<br />
					<br />
				</div>
			</div>
		);
	}
}

module.exports = SimplePanel;