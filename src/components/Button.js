import React, {useState} from 'react'

const Button = () => {
    const[show, setShow] = useState('Banana')
    
    
    
    const toggleShow = () => {
        show === 'Banana' ? 
        setShow('Apple') : 
        setShow('Banana')
        console.log(show)
    }

    return (
        <div style={ {display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <button onClick={toggleShow}>
                        <div>{show}</div>
            </button>
            

        </div>
    )
}

export default Button
