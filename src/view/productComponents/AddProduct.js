import React from 'react';
import { connect } from 'react-redux';
import { productActions, alertActions } from '../../script/redux';
import { LineScale } from 'react-pure-loaders';
import { Prompt } from 'react-router-dom';
import { productService } from '../../script/services';

export default class AddPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                productName: '',
                productDescription: '',
                manufacturer: '',
                price: '',
                quantity: '',
                noOfViews: 0,
                category: '',
                filePath: ''
            },
            selectedFile: null,
            uploading: false,
            submitted: false,
            editted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChange(event) {
        let { name, value } = event.target;

        const { product } = this.state;
        if (value && name === 'filePath') {
            value = 'a0g2hikrjf7nlzgxymfr.jpg'; //men at work by default
            this.setState({
                selectedFile: event.target.files[0]
            });
        }

        this.setState({
            product: {
                ...product,
                [name]: value
            },
            editted: true
        });

    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { product, selectedFile } = this.state;

        if (product.productName && product.productDescription && product.manufacturer && product.price && product.quantity && product.category && product.filePath && selectedFile) {
            this.setState({
                uploading: true
            });
            this.addImage(selectedFile)
                .then((res) => {
                    product.filePath = res.url;
                    console.log('product is going to upload:' + product);
                    this.props.addProduct(product);
                })
                .catch(err => {
                    this.props.errorAlert('Error while uploading file. Hint:' + err.message);
                })
                .finally(()=>{
                    this.setState({
                        uploading: false,
                        editted: false
                    })
                 } )
        }
    }
    addImage = async (image) => {
        return await productService.addImage(image)
    }

    render() {
        const { uploading, product, submitted } = this.state;
        return (
            <div>
                <Prompt when={this.state.editted} message="You have unsaved changes, Are you sure you want to leave?"/>
                 
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <div className="row ">
                        <div className="col-sm-5">
                            <div className="row justify-content-center">
                                <h1>Add Product</h1>
                            </div>

                            <div className="row justify-content-center">
                                <blockquote className=" blockquote text-center">
                                    <p className="col">Our plan is to lead the public with new products rather than ask them what kind of products they want...</p>
                                    <footer className="blockquote-footer float-sm-right"> <cite title="Source Title">Akio Morita</cite></footer>
                                </blockquote>
                            </div>
                            <div className="row  justify-content-center">
                                <marquee><h4 className="col text-center">Welcome to Add Product Page</h4></marquee>
                            </div>
                        </div>


                        <div className="col-md-auto d-none d-md-block">
                            <div className="verticalLine "></div>
                        </div>
                        <div className="col align-self-center p-2">
                            <div className={'form-group' + (submitted && !product.productName ? ' has-error' : '')}>
                                <label htmlFor="productName">Product Name</label>
                                <input type="text" className={submitted && !product.productName ? "form-control error" : "form-control"} placeholder="Enter Product Name" name="productName" value={product.productName} onChange={this.handleChange} />
                                {submitted && !product.productName &&
                                    <div className="invalidinput">Product Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.productDescription ? ' has-error' : '')}>
                                <label htmlFor="productDescription">Product Description</label>
                                <textarea type="text" className={submitted && !product.productDescription ? "form-control error" : "form-control"} placeholder="Enter Product Description" name="productDescription" value={product.productDescription} onChange={this.handleChange} />
                                {submitted && !product.productDescription &&
                                    <div className="invalidinput">Product Description is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.manufacturer ? ' has-error' : '')}>
                                <label htmlFor="manufacturer">Product Manufacturer</label>
                                <input type="text" className={submitted && !product.manufacturer ? "form-control error" : "form-control"} placeholder="Enter Product manufacturer" name="manufacturer" value={product.manufacturer} onChange={this.handleChange} />
                                {submitted && !product.manufacturer &&
                                    <div className="invalidinput">Product manufacturer is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.price ? ' has-error' : '')}>
                                <label htmlFor="price">Product price</label>
                                <input type="number" className={submitted && !product.price ? "form-control error" : "form-control"} placeholder="Enter Product price" name="price" value={product.price} onChange={this.handleChange} />
                                {submitted && !product.price &&
                                    <div className="invalidinput">Product price is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.quantity ? ' has-error' : '')}>
                                <label htmlFor="quantity">Product quantity</label>
                                <input type="number" className={submitted && !product.quantity ? "form-control error" : "form-control"} placeholder="Enter Product quantity" name="quantity" value={product.quantity} onChange={this.handleChange} />
                                {submitted && !product.quantity &&
                                    <div className="invalidinput">Product quantity is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.category ? ' has-error ' : '')}>
                                <label htmlFor="category">Category</label>
                                <select as="select" name="category" className={submitted && !product.category ? "form-control error" : "form-control "} onChange={this.handleChange}>
                                    <option value="">Choose category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Style">Style</option>
                                    <option value="Food">Food</option>
                                </select>

                                {submitted && !product.category &&
                                    <div className="invalidinput ">Product category is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !product.filePath ? ' has-error' : '')}>
                                <label htmlFor="filePath">FilePath</label>
                                <input id="filePath" name="filePath" type="file" onChange={this.handleChange} className={submitted && !product.filePath ? "form-control error" : "form-control"} />
                                {submitted && !product.filePath &&
                                    <div className="invalidinput">Product filePath is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <button className="btn btn-dark">Add product</button>
                            </div>
                            <LineScale color={'#4e4f52'} loading={uploading} />
                        </div>
                        <br />


                    </div>

                </form>
            </div>
        );
    }
}

const actionCreators = {
    addProduct: productActions.add,
    errorAlert: alertActions.error
}

const connectedAddPage = connect(null, actionCreators)(AddPage);
export { connectedAddPage as AddProduct } 