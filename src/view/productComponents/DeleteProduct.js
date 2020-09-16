import React from 'react';
import { connect } from 'react-redux';
import { productActions } from '../../script/redux';
import { BallClipRotate } from 'react-pure-loaders';

class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    state = {
        productId: this.props.match.params.id
    }
    myChangeHandler = (event) => {
        this.setState({
            productId: event.target.value
        });
    }

    handleSubmit() {
        this.props.deleteProduct(this.state.productId);
        this.setState({
            productId: ''
        });
        this.myFormRef.reset();
    } 




    render() {
        const { products } = this.props;
        let item = [];
        if (products.items) {
            item = products.items.filter(product => {
                return product.id == this.state.productId;
            });
        }

        return (
            <div className="row">
                <div className="col-sm-5 ">
                    <div className="row justify-content-center">
                        <h1>Delete Product</h1>
                    </div>
                    <div className="row justify-content-center">
                        <form ref={(el) => this.myFormRef = el}><br />
                            <p>Enter the ID you want to delete:</p>
                            <input id='inputProductId'
                                type='number' value = {this.state.productId}
                                onChange={this.myChangeHandler}
                            />
                        </form><br />
                    </div>

                </div>
                {this.state.productId &&
                    <div className="col-md-auto d-none d-md-block">
                        <div className="verticalLine "></div>
                    </div>}
                {this.state.productId &&
                    <div className="col justify-content-center">
                        {(!item.length) &&
                            <div >
                                <h2 >Ooops...item not found Please try with different product Id</h2>
                            </div>
                        }
                        {item.map((item) => {
                            return <div className="col-lg-3">
                                <h3>{item.manufacturer}</h3>
                                <div className="detailedProductName">{item.productName}</div>
                                <span><h3><i className="fa fa-rupee blockquote-footer"></i>{"  "}{item.price}</h3></span>
                                <div className="detailedDescription">
                                    <h4>productDescription: </h4>
                                    <span>{item.productDescription}</span>
                                </div>
                                <div>Category: {item.category}</div>
                                <div>Items left: {item.quantity} </div>

                                <div className="col-md-8 pb-3"><br />
                                    <button type="submit" onClick={this.handleSubmit} className="float-sm-right btn btn-dark">Delete</button>
                                    <BallClipRotate color={'#4e4f52'} loading={products.deleting} />
                                </div>

                            </div>
                        })
                        }
                    </div>

                }
            </div>
        );
    }

}

function mapState(state) {
    const { products } = state;
    return { products };
}

const actionCreators = {
    deleteProduct: productActions.delete,
    getAllProducts: productActions.getAll
}

const connectedDeletePage = connect(mapState, actionCreators)(DeleteProduct);
export { connectedDeletePage as DeleteProduct } 