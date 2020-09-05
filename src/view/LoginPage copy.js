import React from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
//import { connect } from 'react-redux';

//import { userActions, alertActions } from '../script/redux';


export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getuserlist();
    }

    getuserlist() {
        
    }
    
    //	Wrong way
	/*
	handleCheckbox() {
		this.setState({bManager: !this.state.bManager})
	}
	*/
    // Correct way for setting state based on previous state value = Through Arrow function


    render() {
        console.log(this.state.data);
        return (
            <div>
                <h2>data is shown below</h2>
                <div>
                    {this.state.data.text}
                </div>
            </div>
        );
    }
}
