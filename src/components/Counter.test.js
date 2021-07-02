import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter'
import { render } from '@testing-library/react'


Enzyme.configure({adapter: new Adapter() });

let wrapper;
beforeEach(()=>{
  wrapper = shallow(<Counter/>)
});

describe('Counter testing', () => {
    test('render the title of counter', ()=>{

        // console.log(wrapper.debug())
        expect(wrapper.find('h1').text()).toContain('This is a counter')

    // option without enzime: 
    //     const { getByText } = render(<Counter/>);
    //    const linkElement = getByText('This is a counter');
    //    expect(linkElement).toBeInTheDocument();

    })

    test(`render a button with text of 'increment'`, () =>{
        expect(wrapper.find("#increment-btn").text()).toBe('increment')
    })

    test("render the initial value of state in a div", () =>{
        expect(wrapper.find("#counter-value" ).text()).toBe('0')
    }) 

    test("render the click event of increment button and increment counter value", ()=>{
        wrapper.find("#increment-btn").simulate('click')
        expect(wrapper.find("#counter-value").text()).toBe('1')
    })

    test("render the click event of decrement button and dencrement counter value", ()=>{
        wrapper.find("#increment-btn").simulate('click')
        expect(wrapper.find("#counter-value").text()).toBe('1')
        wrapper.find("#decrement-btn").simulate('click')
        expect(wrapper.find("#counter-value").text()).toBe('0')
    })
 
})

