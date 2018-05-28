import React from 'react';
import ReactDOM from 'react-dom';



class AnalogDisplay extends React.Component{
	clock(){
	let date = new Date(this.props.time);
	
	let dote = {
		position:'relative',
		top: 78,
		left: 92,
		height: 20,
		width: 20,
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

class DigitalDisplay extends React.Component{
	render(){
		return <h1>{this.props.time}</h1>
	}
}

class Clock extends React.Component{
	constructor(props){
		super(props)
		this.launchClock()
		this.state = {
			currentTime: (new Date()).toLocaleString()
		}
	}


	launchClock(){
		setInterval(()=> {
			console.log('Updating.....')
			this.setState({currentTime: (new Date()).toLocaleString()})
		},1000)
	}
	render(){
		console.log('Reandering....')
		return <div>
			<AnalogDisplay time={this.state.currentTime}/>
			<DigitalDisplay time={this.state.currentTime}/>
		</div>
	}
}

ReactDOM.render(
	<Clock/>,
	document.getElementById('root')
	);