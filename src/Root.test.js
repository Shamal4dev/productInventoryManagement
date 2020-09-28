import React from 'react';
import { mount } from 'enzyme';
import Root from './Root';

describe('Root snapshot', () => {
    let wrapper = mount(<Root />);

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});