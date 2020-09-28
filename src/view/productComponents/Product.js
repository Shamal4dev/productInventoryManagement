import React, { Component } from "react";
import { productActions } from '../../script/redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Product extends Component {

    noOfViewsUpdated = false;

    updateNoOfViews(item){
        let noOfViews = parseInt(item[0].noOfViews);
        noOfViews = noOfViews+1;
        item[0].noOfViews = noOfViews;
        this.props.updateProduct(item[0],false);//passing false to avoid alert while updating the product
    }

    render() {

        const { products } = this.props;
        let item = [];

        if (products.items) {
            item = products.items.filter(product => {
                return product.id == this.props.match.params.id;
            });
            if((item.length > 0) && (!this.noOfViewsUpdated)){
                this.noOfViewsUpdated = true;
                this.updateNoOfViews(item);
            }
        }

        return (

            <div className="container "><br /><br />
                {item && item.map((item, key) =>
                    <div className="row" key={key}>
                        {<div className="col-lg-8">
                            <img className="img-fluid rounded d-block w-100" src={item.filePath} alt={item.filePath} />
                        </div>}
                        <div className="col-lg-3">
                            <h3>{item.manufacturer}</h3>
                            <div className="detailedProductName">{item.productName}</div>
                            <span><h3><i className="fa fa-rupee blockquote-footer"></i>{"  "}{item.price}</h3></span>
                            <div className="detailedDescription">
                                <h4>productDescription: </h4>
                                <span>{item.productDescription}</span>
                            </div>
                            <div>Category: {item.category}</div>
                            <div>Items left: {item.quantity} </div>
                            <Link to={`/deleteProduct/${item.id}`} ><i className="fa fa-trash" title='Delete the product' aria-hidden="true"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to={`/updateProduct/${item.id}`} ><i className="fa fa-pencil" title='Edit the product' aria-hidden="true"></i></Link>
                        </div>
                    </div>
                )}
                {item.length < 1 &&
                    <div >
                        <h2 >Ooops...item not found Please try with different product Id</h2>
                    </div>
                }
                <br />
            </div>

        );
    }
}

function mapState(state) {
    const { products } = state;
    return { products };
}
const actionCreator = {
    getAllproducts: productActions.getAll,
    updateProduct: productActions.update
}
const connectedProductPage = connect(mapState, actionCreator)(Product);
export { connectedProductPage as Product };


