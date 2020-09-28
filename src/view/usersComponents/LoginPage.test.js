import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

const props = {
    login: jest.fn(),
    logout:jest.fn(),
    clear: () => {
    }
};



describe('Login page test', () => {

    let wrapper = shallow(<LoginPage {...props} />);

    test('renders correct heading for Login', () => {
        expect(wrapper.find("h2").render().text()).toEqual("Login");
    });

    it('should not be called with the userName and password arguments', () => {

        wrapper.find({ name: "userName" }).simulate(
            'change',
            {
                target:
                    { name: 'userName', value: '' }
            })
        wrapper.find({ name: "password" }).simulate(
            'change',
            {
                target:
                    { name: 'password', value: '' }
            })
        wrapper.find('#loginForm').simulate(
            'submit',
            { preventDefault() { } }
        )
        expect(props.login.mock.calls.length).toBe(0);

    });
    it('should be called with the userName and password arguments', () => {

        wrapper.find({ name: "userName" }).simulate(
            'change',
            {
                target:
                    { name: 'userName', value: 'jamesBond' }
            })
        wrapper.find({ name: "password" }).simulate(
            'change',
            {
                target:
                    { name: 'password', value: '77777' }
            })
        wrapper.find('#loginForm').simulate(
            'submit',
            { preventDefault() { } }
        )
        expect(props.login.mock.calls).toEqual(
            [["jamesBond", "77777"]]
          )

    });
});
