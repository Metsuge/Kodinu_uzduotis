import React from 'react';
import '../StyleFeatured.css';

const Featured = () => {
    return(<>

    <div className='main-featured'>
        <div className='top-text'>
            <li><button id='button-new-article'>NEW ARTICLE</button></li>
            <li className='word-published'>Published Yesterday</li>
            <p className='word-featured'>FEATURED</p>
        </div>
        
        <p className='text'>
        <h2>Exploring the Curonian Spit</h2>
            <p className='long-text'>
                The Curonian Spit is a 98 km long, thin, curved sand-dune spit that separates the Curonian Lagoon from the Baltic
                Sea coast. Its southern portion lies within Kaliningrad Oblast, Russia and its northern within southwestern Lithuania. It is a UNESCO World Heritage Site shared by the two countries.
            </p>
        </p>
        <button className='button-article'>Read the article</button>
               
           
    
    </div>
        </>

    )
}


export default Featured;