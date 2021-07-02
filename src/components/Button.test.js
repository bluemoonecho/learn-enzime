import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from './Button'


Enzyme.configure({adapter: new Adapter() });


describe('Button', () => {
    it ('should show text', () =>{
        const wrapper = shallow(<Button />)
        const words = wrapper.find('div div');
        expect(words.text()).toBe('Banana')
    });
    it('should change text when button is clicked', () =>{
        const wrapper = shallow(<Button />)
        const btn = wrapper.find('button');
        btn.simulate('click');
        const words = wrapper.find('div div');
        expect(words.text()).toBe('Apple');
        expect(words.length).toBe(1)
    })
})
