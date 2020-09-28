import React from 'react';
import { shallow } from 'enzyme';
import AddProduct from './AddProduct';

const props = {
    addProduct: jest.fn(),
    errorAlert: jest.fn()
};

describe('Add product page test', () => {
    let wrapper = shallow(<AddProduct {...props} />);
    it('renders correct heading for Add product', () => {
        expect(wrapper.find("h1").render().text()).toEqual("Add Product");
    });
    it('should not be called without inputs arguments', () => {
        wrapper.find("form").simulate(
            'submit',
            { preventDefault() { } }
        )
        expect(props.addProduct.mock.calls.length).toBe(0);
    });
});