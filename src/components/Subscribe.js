import React from 'react';
import '../StyleSubscribe.css';

const Subscribe = () => {
    return(<>

    <div className='main-subscribe'>
        
        <p className='text-trip'>
        <li>Subscribe to travel news</li>
            Don't miss our weekly newsletter with lots of guides and articles!
            <br/><input type="email" placeholder="Insert your email here..."></input>
        </p>

        <button className='button-subscribe'>Subscribe</button>
               
           
    
    </div>
        </>

    )
}


export default Subscribe;