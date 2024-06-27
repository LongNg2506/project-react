import React from 'react'

const UseEffectHookExample=({ name }:{name:string}) => {
    const message = `Hello, ${name}!`; // Calculates output
    // Bad!
    
    React.useEffect(()=>{
        console.log(2);
        
        document.title = `Greetings to ${name}`; // Side-effect!
    })
    return <div>
        {console.log(1)};
        {message}</div>;       // Calculates output
};
export default UseEffectHookExample