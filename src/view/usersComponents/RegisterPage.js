import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LineScale } from 'react-pure-loaders';

import { userActions } from '../../script/redux';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
                mobileNo: '',
                location: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.userName && user.password && (user.mobileNo.length > 8) && user.location) {
            let result = this.props.register(user);
            console.log('result' + result);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className={submitted && !user.firstName ? "form-control error": "form-control"} name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="invalidinput">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className={submitted && !user.lastName ? "form-control error": "form-control"} name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="invalidinput">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                        <label htmlFor="username">Email ID/Username</label>
                        <input type="text" className={submitted && !user.userName ? "form-control error": "form-control"} name="userName" value={user.userName} onChange={this.handleChange} />
                        {submitted && !user.userName &&
                            <div className="invalidinput">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className={submitted && !user.password ? "form-control error": "form-control"} name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="invalidinput">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.mobileNo ? ' has-error' : '')}>
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="number" className={submitted && (!user.mobileNo || user.mobileNo.length < 9 )? "form-control error": "form-control"} name="mobileNo" value={user.mobileNo} onChange={this.handleChange} />
                        {submitted && (!user.mobileNo || user.mobileNo.length < 9) &&
                            <div className="invalidinput">Mobile number is required with 9 digits</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.location ? ' has-error' : '')}>
                        <label htmlFor="location">Location</label>
                        <input type="text" className={submitted && !user.location ? "form-control error": "form-control"} name="location" value={user.location} onChange={this.handleChange} />
                        {submitted && !user.location &&
                            <div className="invalidinput">Location is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-dark">Register</button>

                        <Link to="/login" className="btn btn-link">Cancel</Link>

                        <LineScale color={'#4e4f52'} loading={registering} />

                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as RegisterPage };