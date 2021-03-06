import React from 'react';

class AnalogDisplay extends React.Component{
	clock(){
	let date = new Date(this.props.time);
	
	let dote = {
		position:'relative',
		top: 75,
		left: 86,
		height: 25,
		width: 25,
		backgroundColor: 'blue',
		borderRadius: '50%',
		display: 'inline-block'

	}

	let dialStyle = {
		position: 'relative',
		top: 0,
		left: 0,
		width: 200,
		height: 200,
		borderRadius: 20000,
		borderStyle: 'solid',
		borderColor: 'black'
	}
	let secondHandStyle = {
		position: 'relative',
		top: 100,
		left: 100,
		border: '1px solid red',
		width: '40%',
		height: 1,
		transform: 'rotate('+ ((date.getSeconds()/60)*360 - 90 ).toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'red'
	}

	let minuteHandStyle = {
		position: 'relative',
		top: 100,
		left: 100,
		border: '1px solid grey',
		width: '40%',
		height: 2,
		transform: 'rotate('+ ((date.getMinutes()/60)*360 - 90).toString() +'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey'
	}

	let hourHandStyle = {
		position: 'relative',
		top: 95,
		left: 100,
		border: '1px solid grey',
		width: '20%',
		height: 4,
		transform: 'rotate('+ ((date.getHours()/12)*360 - 90).toString() + 'deg)',
		transformOrigin: '0% 0%',
		backgroundColor: 'grey' 
	}

	return (
			<div style={dialStyle}>
				<div style={secondHandStyle}/>
				<div style={minuteHandStyle}/>
				<div style={hourHandStyle}/>
				<div style={dote}/>
			</div>
		)
}	

	render(){
		return <div>{this.clock()}</div>
	}
}

export default AnalogDisplay;