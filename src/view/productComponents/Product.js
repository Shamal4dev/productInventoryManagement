import React, { Component } from "react";
import { productActions } from '../../script/redux';
import { connect } from 'react-redux';


class Product extends Component {

    componentDidMount() {
        const { loadProduct } = this.props;
        loadProduct();
    }
    render() {

        const { product } = this.props;
        const { products } = product;
        const item = products.filter(product => {
            return product.id == this.props.match.params.id;
        });

        console.log("item: ", item);

        return (

            <div className="container p-2"><br /><br />
                {item.map((item) =>
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid rounded d-block w-100" src={require(`../../images/${item.filePath}`)} alt={item.filePath} />
                        </div>
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
                        </div>
                    </div>
                )}
                <br />
            </div>

        );
    }
}

const mapStateToProps = ({ product }) => {
    return {
        product,
    };
};
export default connect(mapStateToProps, productActions)(Product);


