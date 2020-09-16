import React from 'react';
import { connect } from 'react-redux';
import { productActions } from '../../script/redux';
import { BallClipRotate, LineScale } from 'react-pure-loaders';
import { productService } from '../../script/services';


class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDescription: '',
            manufacturer: '',
            price: '',
            quantity: '',
            category: '',
            filePath: '',
            submitted: false,
            loading: false,
            validItem: false,
            productId: this.props.match.params.id
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        if (this.state.productName !== '' && this.state.productDescription !== '' && this.state.manufacturer !== '' && this.state.price !== '' && this.state.quantity !== '' && this.state.category !== '' && this.state.filePath !== '') {
            let product = {
                id: this.state.productId,
                productName : this.state.productName,
                productDescription : this.state.productDescription,
                manufacturer : this.state.manufacturer,
                price: this.state.price,
                quantity: this.state.quantity,
                category: this.state.category,
                filePath: this.state.filePath
            }
            this.props.updateProduct(product);
        }
    }

    myChangeHandler = (event) => {
        this.setState({
            productId: event.target.value
        });
        this.getProduct(event.target.value);
    }

    getProduct(id) {
        this.setState({
            loading: true
        });
        productService.getById(id)
            .then(product => {
                if (product.length >0) {
                    this.setState({
                        validItem: true,
                        productName: product[0].productName,
                        productDescription: product[0].productDescription,
                        manufacturer: product[0].manufacturer,
                        price: product[0].price,
                        quantity: product[0].quantity,
                        category: product[0].category,
                        filePath: product[0].filePath
                    })
                }
                else{
                    this.setState({
                        validItem: false,
                        productName: '',
                        productDescription: '',
                        manufacturer: '',
                        price: '',
                        quantity: '',
                        category: '',
                        filePath: ''
                    });
                }
            })
            .finally(() => {
                this.setState({
                    loading: false
                });
            })
    }

    componentDidMount() {
        this.getProduct(this.props.match.params.id);
    }


    render() {

        const { updating } = this.props;
        let { submitted, validItem, loading } = this.state;

        return (

            <div className="row ">
                <div className="col-sm-5">
                    <div className="row justify-content-center">
                        <h1>Edit Product</h1>
                    </div>
                    <br />
                    <div className="row  justify-content-center">
                        <marquee><h4 className="col text-center">Welcome to Edit Product Page</h4></marquee>
                    </div>
                    <div className="row  justify-content-center">
                        <form ref={(el) => this.myFormRef = el}><br />
                            <p>Enter the ID you want to delete:</p>
                            <input id='inputProductId'
                                type='number' value={this.state.productId}
                                onChange={this.myChangeHandler}
                            />
                        </form>
                    </div>
                </div>


                {this.state.productId &&
                    <div className="col-md-auto d-none d-md-block ">
                        <div className="verticalLine "></div>
                    </div>
                }
                {this.state.productId &&
                    <div className="col justify-content-center">
                        {loading &&
                            <div className="container-fluid text-center">
                                <BallClipRotate color={'#4e4f52'} loading={true} />
                            </div>
                        }

                        { !validItem && !loading &&
                            <div >
                                <h2 >Ooops...item not found Please try with different product Id</h2>
                            </div>
                        }

                        {validItem && !loading &&

                            
                            <form onSubmit={this.handleSubmit}>
                                
                                <div className="col align-self-center p-2 ">
                                    <div className={'form-group' + (submitted && !this.state.productName ? ' has-error' : '')}>
                                        <label htmlFor="productName">Product Name</label>
                                        <input type="text" className={submitted && !this.state.productName ? "form-control error" : "form-control"} placeholder="Enter Product Name" name="productName" ref="productName" value={this.state.productName} onChange={this.handleChange} />
                                        {submitted && !this.state.productName &&
                                            <div className="invalidinput">Product Name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.productDescription ? ' has-error' : '')}>
                                        <label htmlFor="productDescription">Product Description</label>
                                        <textarea className={submitted && !this.state.productDescription ? "form-control error" : "form-control"} placeholder="Enter Product Description" name="productDescription" value={this.state.productDescription} onChange={this.handleChange} />
                                        {submitted && !this.state.productDescription &&
                                            <div className="invalidinput">Product Description is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.manufacturer ? ' has-error' : '')}>
                                        <label htmlFor="manufacturer">Product Manufacturer</label>
                                        <input type="text" className={submitted && !this.state.manufacturer ? "form-control error" : "form-control"} placeholder="Enter Product manufacturer" name="manufacturer" value={this.state.manufacturer} onChange={this.handleChange} />
                                        {submitted && !this.state.manufacturer &&
                                            <div className="invalidinput">Product manufacturer is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.price ? ' has-error' : '')}>
                                        <label htmlFor="price">Product price</label>
                                        <input type="number" className={submitted && !this.state.price ? "form-control error" : "form-control"} placeholder="Enter Product price" name="price" value={this.state.price} onChange={this.handleChange} />
                                        {submitted && !this.state.price &&
                                            <div className="invalidinput">Product price is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.quantity ? ' has-error' : '')}>
                                        <label htmlFor="quantity">Product quantity</label>
                                        <input type="number" className={submitted && !this.state.quantity ? "form-control error" : "form-control"} placeholder="Enter Product quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                                        {submitted && !this.state.quantity &&
                                            <div className="invalidinput">Product quantity is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.category ? ' has-error ' : '')}>
                                        <label htmlFor="category">Category</label>
                                        <select as="select" value={this.state.category} name="category" className={submitted && !this.state.category ? "form-control error" : "form-control "} onChange={this.handleChange}>
                                            <option value="">Choose category</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Style">Style</option>
                                            <option value="Food">Food</option>
                                        </select>

                                        {submitted && !this.state.category &&
                                            <div className="invalidinput ">Product category is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !this.state.filePath ? ' has-error' : '')}>
                                        <label htmlFor="filePath">FilePath</label>
                                        <input value={this.state.filePath} name="filePath" type="text" disabled className={submitted && !this.state.filePath ? "form-control error" : "form-control"} onChange={this.handleChange} />
                                        {submitted && !this.state.filePath &&
                                            <div className="invalidinput">Product filePath is required</div>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-dark">Update</button>
                                    </div>
                                    <LineScale color={'#4e4f52'} loading={updating} />
                                </div>
                                <br />
                            </form>
                        }
                    </div>
                }
            </div>
        );
    }
}

function mapState(state) {
    const { updating } = state.update;
    const { products } = state;
    return { updating, products };
}

const actionCreators = {
    updateProduct: productActions.update
}

const connectedEditPage = connect(mapState, actionCreators)(EditPage);
export { connectedEditPage as UpdateProduct } 