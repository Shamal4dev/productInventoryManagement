import React from 'react';

export class About extends React.Component {
   
    render() {
       
        return(
            <div>
                <h3>About Product Inventory Management</h3>
                <p>The purpose of this system is to maintain the product details in a web page. The users can view the products <strong>without signing in</strong>. 
                This system allows the registered and authenticated users to add, edit, delete the products and view the product detail. 
                The user interface of this system is implemented using <strong>React</strong>. The data about the products is managed in a JSON server.
                </p>
            </div>
        )
    }
}