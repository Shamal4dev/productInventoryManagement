import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Header, HomePage, Footer } from './view/sharedComponents';
import { PrivateRoute } from './view/PrivateRoute';
import { LoginPage, RegisterPage } from './view/usersComponents';
import { connect } from 'react-redux';
import { alertActions } from './script/redux';

import { Test } from './view/LoginPage copy';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className='h-100'>
        <Header />
        <div className="jumbotron mb-0">
          <div className="container">
            <div >
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }

              <Switch>
                <PrivateRoute exact path="/about" component={HomePage} />
                <PrivateRoute exact path="/desc" component={HomePage} />
              
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/register" component={RegisterPage}></Route>
                <Route path="/test" component={Test}></Route>
                <Redirect from="*" to="/login" />
              </Switch>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators=  {
  clearAlerts: alertActions.clear
}

const connectedApp = withRouter(connect(mapState, actionCreators)(App));
export { connectedApp as App };
