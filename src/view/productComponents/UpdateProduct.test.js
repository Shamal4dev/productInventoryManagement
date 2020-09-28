import React from 'react';
import { shallow } from 'enzyme';
import UpdateProduct from './UpdateProduct';

const props = {
    products:{},
    match:{params:{id:2}},
    updateProduct: jest.fn()
};

describe('Update product page test', () => {
    let wrapper = shallow(<UpdateProduct {...props} />);
    it('renders correct heading for update product', () => {
        expect(wrapper.find("h1").render().text()).toEqual("Edit Product");
    });
});