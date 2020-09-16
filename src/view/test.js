import React from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
//import { connect } from 'react-redux';
import axios from 'axios';
var sha1 = require('sha1');
//import { userActions, alertActions } from '../script/redux';


export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {

                filePath: '',

            },
            selectedFile: null,
            uploading: false,
            success: false,
            url:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        console.log('handle change:');
        let { name, value } = event.target;
        if (value) {
            const { product } = this.state;
            if (name === 'filePath') {
                value = event.target.files[0].name;
                this.setState({
                    selectedFile: event.target.files[0]
                });
            }

            this.setState({
                product: {
                    ...product,
                    [name]: value
                }
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handle submit' + this.state.selectedFile);


        let formData = new FormData();
        formData.append("file", this.state.selectedFile);
        formData.append("upload_preset", 'pro_inven');



        axios.post('https://api.cloudinary.com/v1_1/shammisgallery/image/upload/', formData)
            .then((result) => {
                this.setState({
                    url:result.data.url,
                    success: true

                });
               
            })
            .catch((err) => {
                console.log(err);
            })

    }




    render() {

        const { product } = this.state;

        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <div className='form-group' >
                        <label htmlFor="filePath">FilePath</label>
                        <input id="filePath" name="filePath" type="file" onChange={this.handleChange} className={!product.filePath ? "form-control error" : "form-control"} />
                        {!product.filePath &&
                            <div className="invalidinput">Product filePath is required</div>
                        }
                    </div>
                    <br /><br />
                    <button className="btn btn-dark">Add</button>

                </form>
                {this.state.url &&
                    <div>
                        {<img className="card-img-top img-thumbnail" src={this.state.url} alt='shamai'/>}
                    </div>
                }
            </div>
        );
    }
}
