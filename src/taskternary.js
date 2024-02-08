import { useState } from 'react';

export let Ternary =() =>{

    var [inputvalue, setInputvalue] = useState("");

    function setter(temp){
        setInputvalue(temp.target.value);
    }

    const [cssstyle , setCssstyle] = useState(
        {
            backgroundcolor:'black',
            color: 'white'
        }
    )

    // ternary

    function Season(){

        inputvalue === "summer" ?
            setCssstyle({ 
                backgroundImage: 'url(${'summer.jfif'})',
        }) :
            inputvalue === "winter" ?
                setCssstyle({ 
                    backgroundImage: 'url(${'winter.jfif'})',
                 }) :
                inputvalue === "spring" ?
                    setCssstyle({ 
                        backgroundImage: 'url(${''})'
                    }) :

                    setCssstyle({ })

                    // setDisplay(inputvalue);
        
    }

    // const [display,setDisplay] = useState("");

    return (
        <>
        <div className='row justify-content-center'>
                <div className='col-5 mt-5'>
                    <input
                        onChange={setter}
                        className='form-control'
                        placeholder='Enter your Season'
                    />
                    <button className='btn btn-outline-warning text-center mt-4'
                        onClick={Season}
                    >Add</button>

                    <p style={cssstyle} className='mt-3'>
                    A season refers to one of the four periods into which the year is commonly 
                    divided based on changes in weather and natural phenomena.
                    </p>

                    
                </div>
            </div>
        </>
    )
}