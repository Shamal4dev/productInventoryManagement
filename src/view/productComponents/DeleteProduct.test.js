import React from 'react';
import { shallow } from 'enzyme';
import DeleteProduct from './DeleteProduct';

const props = {
    products: {
        items: [{
            "productName": "Digital SLR Camera",
            "productDescription": "Good camera with 32gb sd card and its performnace is good",
            "manufacturer": "Nikon",
            "quantity": "3",
            "price": "42000",
            "id": 2,
            "noOfViews": 9,
            "category": "Electronics",
            "filePath": "http://res.cloudinary.com/shammisgallery/image/upload/v1600280519/productInventory/v1xam3idocykerlq1nvs.jpg"
        }]
    },
    match: { params: { id: 2 } },
    deleteProduct: jest.fn(),
    getAllProducts: jest.fn()
};

describe('Delete product page test', () => {
    let wrapper = shallow(<DeleteProduct {...props} />);
    it('renders correct heading for delete product', () => {
        expect(wrapper.find("h1").render().text()).toEqual("Delete Product");
    });
});