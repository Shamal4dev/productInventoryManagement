import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home';

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
        },
        {
            "productName": "Adidas Running shoe",
            "productDescription": "manufactured with high quality rubber and  its long lasting",
            "manufacturer": "Adidas",
            "price": "3000",
            "quantity": "4",
            "noOfViews": 3,
            "id": 6,
            "category": "Style",
            "filePath": "http://res.cloudinary.com/shammisgallery/image/upload/v1600280747/productInventory/yendfoiijc25wfqwqpwc.jpg"
        },
        {
            "productName": "Ice Cream with strawberry",
            "productDescription": "Strawberry flavoured ice cream with raw straberry pieces ",
            "manufacturer": "Fruit Bea",
            "price": "139",
            "quantity": "2",
            "noOfViews": 5,
            "id": 5,
            "category": "Food",
            "filePath": "http://res.cloudinary.com/shammisgallery/image/upload/v1600280616/productInventory/ltc5ofknafowqhgwdfm1.jpg"
        }]
    }
};

describe('Home page test', () => {
    let wrapper = shallow(<HomePage {...props} />);

    it('renders correct heading for electronics in home page', () => {
        expect(wrapper.find("h4").at(0).render().text()).toEqual("Electronics");
    });
    it('renders correct heading for Food Items in home page', () => {
        expect(wrapper.find("h4").at(1).render().text()).toEqual("Food Items");
    });
    it('renders correct heading for Styles in home page', () => {
        expect(wrapper.find("h4").at(2).render().text()).toEqual("Styles");
    });

}); 