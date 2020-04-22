import React from 'react';
import '../StylePopular.css';

const Popular = () => {
    return(<>

    <div className='main-popular'>
        
        <div id='popular-full-list'>
            <li id='word-public'>Most popular articles</li>
            
        </div>
        <div className='recent-popular-list' >
           <div className='text-container' >
                
            
                <div className='component-text'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>Walking in Palestine tour</li>
                    <li id='madag-text'>You get the lot - fantastic fresh healthy food, beautiful walks in scorching hot sunny weather.</li>
                </div>
            </div>
           
        </div>
        <div className='recent-popular-list' >
           <div className='text-container' >
                
            
                <div className='component-text'>
                    <li id='reviews'>TRIP GUIDES</li>
                    <li id='off-road'>Best trekking places in India</li>
                    <li id='madag-text'>If you want to truly experience India, one of the best ways to do so, is on foot. India is a country </li>
                </div>
            </div>
           
        </div>
        <div className='recent-popular-list' >
           <div className='text-container' >
                
            
                <div className='component-text'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>Six Nights in Namibia</li>
                    <li id='madag-text'>We arrive at Kulala desert lodge in a 4 seater Cessna from Windhoek 32 hours after we left</li>
                </div>
            </div>
           
        </div>
           
    
    </div>
        </>

    )
}


export default Popular;