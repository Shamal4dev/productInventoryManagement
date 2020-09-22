import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Header, HomePage, Footer, About } from './view/sharedComponents';
import { PrivateRoute } from './view/PrivateRoute';
import { LoginPage, RegisterPage, UserDetails } from './view/usersComponents';
import { connect } from 'react-redux';
import { alertActions, productActions } from './script/redux';
import {Product, DeleteProduct, AddProduct, UpdateProduct} from './view/productComponents';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
  componentDidMount(){
    this.props.getAllproducts();
  }
  render() {
    const { alert } = this.props;
    return (
      <div className='h-100'>
        <Header />
        <div className="jumbotron mb-0">
          <div className="container">
            <div >
              <Switch>
                <PrivateRoute exact path="/product/:id" component={Product} />
                <PrivateRoute exact path="/deleteProduct" component={DeleteProduct} />
                <PrivateRoute exact path="/deleteProduct/:id" component={DeleteProduct} />
                <PrivateRoute exact path="/addProduct" component={AddProduct} />
                <PrivateRoute exact path="/updateProduct" component={UpdateProduct} />
                <PrivateRoute exact path="/updateProduct/:id" component={UpdateProduct} />
                <PrivateRoute exact path="/userDetails" component={UserDetails} />
                
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/login" component={LoginPage}></Route>
                <Route exact path="/register" component={RegisterPage}></Route>
                <Route exact path="/about" component={About} />
                <Redirect from="*" to="/login" />
              </Switch>
              <br />
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
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
  clearAlerts: alertActions.clear,
  getAllproducts: productActions.getAll
}

const connectedApp = withRouter(connect(mapState, actionCreators)(App));
export { connectedApp as App };
