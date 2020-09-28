import React from 'react';
import { shallow } from 'enzyme';
import RegisterPage from './RegisterPage';

const props = {
    register: jest.fn(),
};


describe('Register page test', () => {
    let wrapper = shallow(<RegisterPage {...props} />);

    it('renders correct heading for Login', () => {
        expect(wrapper.find("h2").render().text()).toEqual("Register");
    });

    it('should not be called without inputs arguments', () => {
        wrapper.find({ name: "form" }).simulate(
            'submit',
            { preventDefault() { } }
        )
        expect(props.register.mock.calls.length).toBe(0);

    });
    it('should show error when user submit without 9 digit mobile number', () => {

        wrapper.find({ name: "firstName" }).simulate(
            'change',
            {
                target:
                    { name: 'firstName', value: 'James' }
            })
        wrapper.find({ name: "lastName" }).simulate(
            'change',
            {
                target:
                    { name: 'lastName', value: 'Bond' }
            })
        wrapper.find({ name: "userName" }).simulate(
            'change',
            {
                target:
                    { name: 'userName', value: 'jamesBond@gmail.com' }
            })
        wrapper.find({ name: "password" }).simulate(
            'change',
            {
                target:
                    { name: 'password', value: '1234' }
            })
        wrapper.find({ name: "mobileNo" }).simulate(
            'change',
            {
                target:
                    { name: 'mobileNo', value: 9874563 }
            })
        wrapper.find({ name: "location" }).simulate(
            'change',
            {
                target:
                    { name: 'location', value: 'konapa Agrahara' }
            })
        wrapper.find({ name: "form" }).simulate(
            'submit',
            { preventDefault() { } }
        )
        const error = wrapper.find(".invalidinput").render().text();
        expect(error).toBe('Mobile number is required with 9 digits');

    });
    it('should be called with all the parameters', () => {

        wrapper.find({ name: "firstName" }).simulate(
            'change',
            {
                target:
                    { name: 'firstName', value: 'James' }
            })
        wrapper.find({ name: "lastName" }).simulate(
            'change',
            {
                target:
                    { name: 'lastName', value: 'Bond' }
            })
        wrapper.find({ name: "userName" }).simulate(
            'change',
            {
                target:
                    { name: 'userName', value: 'jamesBond@gmail.com' }
            })
        wrapper.find({ name: "password" }).simulate(
            'change',
            {
                target:
                    { name: 'password', value: '1234' }
            })
        wrapper.find({ name: "mobileNo" }).simulate(
            'change',
            {
                target:
                    { name: 'mobileNo', value: 9874563210 }
            })
        wrapper.find({ name: "location" }).simulate(
            'change',
            {
                target:
                    { name: 'location', value: 'konapa Agrahara' }
            })
        wrapper.find({ name: "form" }).simulate(
            'submit',
            { preventDefault() { } }
        )
        expect(JSON.stringify(props.register.mock.calls)).toEqual(
            "[[{\"firstName\":\"James\",\"lastName\":\"Bond\",\"userName\":\"jamesBond@gmail.com\",\"password\":\"1234\",\"mobileNo\":9874563210,\"location\":\"konapa Agrahara\"}]]"
        )

    });
});