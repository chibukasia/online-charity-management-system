import React from 'react'

function ProgressBar({bgcolor,progress,height}){
	// set the original bar
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 30,
	}
	
    // set the current progress abr
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		maxWidth: "100%",
		backgroundColor: bgcolor,
	    borderRadius:30,
		ariaValuemin:"0",
        ariaValuemax:"100",
		textAlign: 'right'
	}
	// Set the text of the progress bar
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default ProgressBar;
