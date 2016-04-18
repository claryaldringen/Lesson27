var React = require('react');

class BigPanel extends React.Component{

	render() {
		var style = {height: 200};

		var bodyStyle = {background: '#484d4d', color: '#ffffff', textAlign: 'center'};

		var spanStyle = {color: '#b0b1b1'};

		if(this.props.color) style.background = this.props.color;

		return(
			<div className="panel panel-default">
				<div style={style} className="panel-heading">
				</div>
				<div style={bodyStyle}  className="panel-body">
					<div className="row">
						<div className="col-xs-4">
							<h2>{this.props.views}</h2>
							<span style={spanStyle}>Shot Views</span>
						</div>
						<div className="col-xs-4">
							<h2>{this.props.likes}</h2>
							<span style={spanStyle}>Likes</span>
						</div>
						<div className="col-xs-4">
							<h2>{this.props.comments}</h2>
							<span style={spanStyle}>Comments</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = BigPanel;