import React from 'react';
import '../StyleSubscribe.css';

const Subscribe = () => {
    return(<>

    <div className='main-subscribe'>
        
        <p className='text-trip'>
            <ul><li>Subscribe to travel news</li></ul>
                Don't miss our weekly newsletter with lots of guides and articles!
            <br/><input className='input' type="email" placeholder="Insert your email here..."></input>
        </p>

        <button className='button-subscribe'>Subscribe</button>
               
           
    
    </div>
        </>

    )
}


export default Subscribe;