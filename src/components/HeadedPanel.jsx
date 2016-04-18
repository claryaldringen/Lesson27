var React = require('react');

class HeadedPanel extends React.Component{

	render() {
		var style = {};

		var bodyStyle = {height: 80};

		var fontStyle = {color: '#FFFFFF'};

		if(this.props.color) style.background = this.props.color;

		return(
			<div className="panel panel-default">
				<div style={style} className="panel-heading">
					<span style={fontStyle}>{this.props.hint}</span>
					<h2 style={fontStyle}>{this.props.caption}</h2>
				</div>
				<div className="panel-body" style={bodyStyle}>
				</div>
			</div>
		);
	}
}

module.exports = HeadedPanel;