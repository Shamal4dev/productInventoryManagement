import { connect } from 'react-redux';
import React from 'react';

class UserDetail extends React.Component {

    render() {
        let { loggedIn, user } = this.props;
        return (
            <div className="container">
                <h3>User details:</h3>
                {loggedIn && user &&
                    <div class="row">
                        <div className="col-xs-4 col-md-6">
                            <ul class="list-group">
                                {user.map((value) => {
                                  return  <div>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            First Name :
                                    <span class="badge badge-dark badge-pill">{value.firstName}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Second Name :
                                    <span class="badge badge-dark badge-pill">{value.lastName}</span>
                                        </li> <li class="list-group-item d-flex justify-content-between align-items-center">
                                            User Name :
                                    <span class="badge badge-dark badge-pill">{value.userName}</span>
                                        </li> <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Location :
                                    <span class="badge badge-dark badge-pill">{value.location}</span>
                                        </li> <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Mobile No :
                                    <span class="badge badge-dark badge-pill">{value.mobileNo}</span>
                                        </li>
                                    </div>
                                })}

                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapState(state) {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
}

const connectedUserDetailsPage = connect(mapState, null)(UserDetail);
export { connectedUserDetailsPage as UserDetails };