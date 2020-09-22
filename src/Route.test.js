import React from 'react';
import { mount } from 'enzyme';
import Route from './Route';

describe('Route snapshot', () => {
    let wrapper = mount(<Route />);

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});