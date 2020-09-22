import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import { Pacman } from 'react-pure-loaders';


export class ProductsList extends Component {
    state = {
        fieldsVisiblity: this.props.fieldsVisiblity
    };

    render() {
        const loadingScreen =
            <div >
                <Pacman color={'#4e4f52'} loading='true' />
            </div>

        return (
            <div className="row  justify-content-center">
                {this.props.productslist.map((item,key) =>{
                    return <LazyLoad placeholder={loadingScreen} key={key}>
                        <div className="col-lg-3 p-1" >
                            <Link className="cardLink" to={`/product/${item.id}`}>
                                <div className="card border-secondary">
                                    {<img className="card-img-top img-thumbnail" src={item.filePath} alt={item.filePath} />}
                                    <div className="card-body">
                                        {this.state.fieldsVisiblity[0].productName && <h5 className="card-title cardProductName">{item.productName}</h5>}
                                        {this.state.fieldsVisiblity[0].category && <p className="card-text cardCategory">Category: {item.category}</p>}
                                        {this.state.fieldsVisiblity[0].manufacturer && <p className="card-text cardManufacturer">Manufacturer: {item.manufacturer}</p>}
                                        {this.state.fieldsVisiblity[0].productDescription && <p className="card-text cardProductDescription">{item.productDescription}</p>}
                                        {this.state.fieldsVisiblity[0].price && <p><i className="fa fa-rupee "></i>{item.price}</p>}
                                        {this.state.fieldsVisiblity[0].quantity && <p className="card-text ">Availability: {item.quantity}</p>}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </LazyLoad>
                }
                )}
            </div>
        );
    }
}
