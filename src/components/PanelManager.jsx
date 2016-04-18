var React = require('react');
var SimplePanel = require('./SimplePanel.jsx');
var HeadedPanel = require('./HeadedPanel.jsx');
var BigPanel = require('./BigPanel.jsx');

class PanelManager extends React.Component{

	render() {

		var style = {background: '#f5f7fa', paddingTop: 16};

		var simplePanelStyle = {background: '#ff8a00', color: '#ffffff', textAlign: 'center'};
		var simplePanelHintStyle = {color: '#ffffff'};

		return(
			<div className="container" style={style}>
				<div className="row">
					<div className="col-sm-9">
						<div className="row">
							<div className="col-sm-4">
								<SimplePanel caption="20" hint="New followers added this month" />
							</div>
							<div className="col-sm-4">
								<SimplePanel caption="$ 1250" hint="Average Monthly Income" />
							</div>
							<div className="col-sm-4">
								<SimplePanel caption="$ 13865" hint="Yearly Income Goal" />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<BigPanel views="1580" likes="12000" comments="5100" color="#0096d0"/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<BigPanel views="1580" likes="12000" comments="5100" color="#cd59ae"/>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="row">
							<div className="col-sm-12">
								<SimplePanel caption="18°" hint="Paris" style={simplePanelStyle} hintStyle={simplePanelHintStyle} />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
							<HeadedPanel caption="1.5k" hint="New visitors" color="#0096d0" />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<HeadedPanel caption="50%" hint="Bounce Rate" color="#b28ad6"/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<HeadedPanel caption="28%" hint="Searches" color="#ff4826" />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<HeadedPanel caption="140.5 kb" hint="Traffic" color="#63c254" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = PanelManager;