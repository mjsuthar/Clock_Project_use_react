import React from 'react';

class DigitalDisplay extends React.Component{
	render(){
		return <h1>{this.props.time}</h1>
	}
}

export default DigitalDisplay;