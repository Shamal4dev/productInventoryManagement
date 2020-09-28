import React from 'react';
import { connect } from 'react-redux';
import '../../style/product.css';
import Pie from '../productComponents/Chart';
import { ProductsList } from "../productComponents";
import { LineScalePulseOut } from 'react-pure-loaders';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            topViewedProducts: [],
            fieldsVisiblity: [
                {
                    "productName": true,
                    "productDescription": true,
                    "manufacturer": true,
                    "price": true,
                    "quantity": false,
                    "category": false
                }
            ]
        }
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }
    handleCheckBoxChange(event) {
        const target = event.target;
        var name = target.name;
        let prevState = Object.assign({}, this.state);
        switch (name) {
            case 'productName':
                prevState.fieldsVisiblity[0].productName = !prevState.fieldsVisiblity[0].productName;
                break;
            case 'productDescription':
                prevState.fieldsVisiblity[0].productDescription = !prevState.fieldsVisiblity[0].productDescription;
                break;
            case 'manufacturer':
                prevState.fieldsVisiblity[0].manufacturer = !prevState.fieldsVisiblity[0].manufacturer;
                break;
            case 'category':
                prevState.fieldsVisiblity[0].category = !prevState.fieldsVisiblity[0].category;
                break;
            case 'quantity':
                prevState.fieldsVisiblity[0].quantity = !prevState.fieldsVisiblity[0].quantity;
                break;
            case 'price':
                prevState.fieldsVisiblity[0].price = !prevState.fieldsVisiblity[0].price;
                break;
            default:
                console.log('switch case not found');
                break;
        }
        this.setState(prevState);
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    getTopViewedproducts = (event) => {
        const target = event.target;
        var name = target.name;
        switch (name) {
            case 'top3':
                this.setTopViewedproducts(3);
                break;
            case 'top5':
                this.setTopViewedproducts(5);
                break;
            case 'top8':
                this.setTopViewedproducts(8);
                break;
            case 'top10':
                this.setTopViewedproducts(10);
                break;
            default:
                this.setState({
                    topViewedProducts: []
                });
                break;
        }

    }
    setTopViewedproducts = (number) => {
        const { products } = this.props;
        const sorted = products.items.sort((a, b) => b['noOfViews'] - a['noOfViews']);
        this.setState({
            topViewedProducts: sorted.slice(0, number)
        })
    }

    render() {
       
        const { products } = this.props;
        let electronicsList = [],
            foodList = [],
            styleList = [],
            results = [];

        if (products.items) {
            electronicsList = products.items.filter(product => product.category.includes('Electronics'));
            foodList = products.items.filter(product => product.category.includes('Food'));
            styleList = products.items.filter(product => product.category.includes('Style'));

            if (this.state.query && this.state.query.length > 0) {
                results = products.items.filter(product => product.productName.toLowerCase().includes(this.state.query.toLowerCase()));
            }
        }
        return (
            <div><br />
                 <div className="container-fluid text-center" ><LineScalePulseOut color={'#4e4f52'} loading={products.loading}/></div>
                {products.error && <span className="text-danger">Oops...something went wrong. Hint: {products.error}</span>}
                {products.items && <div className="container-fluid text-center">
                    {/* search starts*/}
                    < form >
                        <div className="form-group row  justify-content-center">
                            <div className="input-group input-group-sm mb-3 col-sm-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                                </div>
                                <input id="searchInput" type="text" placeholder="What are you looking for..." className="form-control searchInput" aria-label="Small" aria-describedby="inputGroup-sizing-sm" ref={input => this.search = input} onChange={this.handleInputChange} />
                            </div>
                            {/* customization starts here */}

                            <div className="btn-group" title="Customize Item Fields">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="collapse" data-target="#customizeDropdown">
                                    <i className="fa fa-qrcode fa-2x"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-custom" id="customizeDropdown" >
                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="productName">  Product Name  </span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="productName" checked={this.state.fieldsVisiblity[0].productName} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="category">Category  </span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="category" checked={this.state.fieldsVisiblity[0].category} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="manufacturer">Manufacturer  </span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="manufacturer" checked={this.state.fieldsVisiblity[0].manufacturer} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="productDescription">Product Descr...</span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="productDescription" checked={this.state.fieldsVisiblity[0].productDescription} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="price">Price </span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="price" checked={this.state.fieldsVisiblity[0].price} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <span className="label" htmlFor="quantity">Availability  </span>
                                        </div>
                                        <div className="col-4">
                                            <label className="switch">
                                                <input type="checkbox" name="quantity" checked={this.state.fieldsVisiblity[0].quantity} onChange={this.handleCheckBoxChange} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/* customization ends here */}

                            {/* top charted button starts here*/}

                            <div className={this.state.query ? "btn-group pl-3 disabledbutton" : "btn-group pl-3"}>
                                <div className="btn-group " role="group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="sr-only"></span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <button type="button" name="top5" className="dropdown-item" onClick={this.getTopViewedproducts}>
                                            Top 5
                                </button>
                                        <div className="dropdown-divider"></div>
                                        <button type="button" name="top8" className="dropdown-item" onClick={this.getTopViewedproducts}>
                                            Top 8
                                </button>
                                        <div className="dropdown-divider"></div>
                                        <button type="button" name="top10" className="dropdown-item" onClick={this.getTopViewedproducts}>
                                            Top 10
                                </button>

                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary" name="top3" onClick={this.getTopViewedproducts}>Top 3 viewed products</button>
                            </div>

                            {/* top charted button ends here*/}
                        </div>
                    </form>
                    <br />
                    {/* search results */}
                    {
                        results.length > 0 &&
                        <div className=" justify-content-center">
                            <h4>Showing "{results.length}" {results.length > 1 ? 'items' : 'item'} for "{this.state.query}"</h4><br />
                            <ProductsList productslist={results} fieldsVisiblity={this.state.fieldsVisiblity} />
                        </div>
                    }

                    {
                        (this.state.query && results.length === 0) &&
                        <div >
                            <h5 >We couldn’t find anything matching your search term. Please try searching for something else </h5>
                        </div>
                    }
                    {/* search ends */}
                    {
                        (this.state.query === '' && results.length === 0 && this.state.topViewedProducts.length === 0) &&
                        <div>
                            <div className=" justify-content-center">
                                <h4>Electronics</h4><br />
                                <ProductsList productslist={electronicsList} fieldsVisiblity={this.state.fieldsVisiblity} />
                            </div>
                            {/* electronics section over */}

                            <br /><hr /><br />
                            <div className=" justify-content-center">
                                <h4>Food Items</h4><br />
                                <ProductsList productslist={foodList} fieldsVisiblity={this.state.fieldsVisiblity} />
                            </div>
                            {/* food items section over */}

                            <br /><hr /><br />
                            <div className=" justify-content-center">
                                <h4 >Styles</h4><br />
                                <ProductsList productslist={styleList} fieldsVisiblity={this.state.fieldsVisiblity} />
                            </div>
                            {/* Styles section over */}
                            <br /><hr />
                        </div>
                    }

                    {/* top viewed products and chart view */}
                    {
                        (this.state.query === '' && results.length === 0 && this.state.topViewedProducts.length > 0) &&
                        <div className="justify-content-center">
                            <button onClick={this.getTopViewedproducts} className="floatingBtn btn-secondary "><i className="fa fa-arrow-circle-left fa-lg my-float">Back</i></button>
                            <Pie data={this.state.topViewedProducts}></Pie>
                            <h4>Top viewed Products</h4>
                            <ProductsList productslist={this.state.topViewedProducts} fieldsVisiblity={this.state.fieldsVisiblity} />
                        </div>
                    }
                </div>}
            </div>
        )
    }
}

function mapState(state) {
    const { products } = state;
    return { products };
}

const connectedHomePage = connect(mapState, null)(Home);
export { connectedHomePage as HomePage };