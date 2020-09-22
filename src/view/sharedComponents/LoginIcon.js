import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../script/redux';
import { Link } from 'react-router-dom';

class LoginIcon extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    user = [];

    logOut() {
        this.props.logout();
        this.user = [];
    }




    render() {
        this.user = localStorage.getItem('user');
        return (
            <div>
                {this.user &&
                    <div className='container'>
                        <Link to='/userDetails'>
                        <button type="button" className='btn'>
                            <span className="letteri"><i className="fa fa-user fa-2x" aria-hidden="true"></i>  </span>
                        </button></Link>&nbsp;&nbsp;

                        <Link to='/login'>
                            <button type="button" onClick={this.logOut} className="btn btn-light">Log Out</button>
                        </Link>
                    </div>
                }
                {!this.user &&
                    <div>
                        <Link to='/login'>
                            <button type="button" className="btn btn-light">Log In</button>
                        </Link>
                    </div>
                }

            </div>
        )
    }
}
function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

const actionCreators = {
    logout: userActions.logout,
};

const connectedAboutPage = connect(mapState, actionCreators)(LoginIcon);
export { connectedAboutPage as LoginIcon };