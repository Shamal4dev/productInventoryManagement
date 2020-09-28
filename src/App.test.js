import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

const props = {
    store: {

    },
    history: {
        listen: () => { }
    },
    alert: {
        message: ''
    },
    getAllproducts: ()=> {}
};
describe('App snapshot', () => {

    let wrapper = shallow(
        <App {...props} />
    );

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});