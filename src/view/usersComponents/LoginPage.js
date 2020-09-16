import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LineScale } from 'react-pure-loaders';

import { userActions, alertActions } from '../../script/redux';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        
        // reset login status
        this.props.logout();

        this.state = {
            userName: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { userName, password } = this.state;
        if (userName && password) {
            this.props.login(userName, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { userName, password, submitted } = this.state;
        console.log('iam in login page');
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                        <label htmlFor="userName">User name</label>
                        <input type="text" className= {submitted && !userName ? "form-control error" :  "form-control"} name="userName" value={userName} onChange={this.handleChange} />
                        {submitted && !userName &&
                            <div className="invalidinput">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className={submitted && !password ?  "form-control error" :  "form-control"} name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="invalidinput">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link><br />
                        <LineScale color={'#4e4f52'} loading={loggingIn}/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    clearAlerts: alertActions.clear
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };