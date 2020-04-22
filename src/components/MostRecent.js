import React from 'react';
import '../StyleMostRecent.css';

const MostRecent = () => {
    return(<>

    <div className='main-recent'>
        
        <div id='public-full-list'>
            <li id='word-public'>Most recent publications</li>
            <li id='word-full-list'>SEE FULL LIST</li>
        </div>
        <div className='recent-content-list' >
           <div className='text-container' >
                <div id='img-recent' ></div>
            
                <div className='component-text'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>Off-road adventures in Madagascar</li>
                    <li id='madag-text'>While he lemurs of Madagascar may understandably be the country's major draw there is so much more to discover on what is the world's fourth largest island.</li>
                </div>
            </div>
           
        </div>
        <div className='recent-content-list' >
           <div className='text-container' >
                <div id='img1-recent' ></div>
            
                <div className='component-text'>
                    <li id='reviews'>TRIP SUGGESTIONS</li>
                    <li id='off-road'>Perfect places to visit for Architecture enthusiasts</li>
                    <li id='madag-text'>Architecture is a very complex and continuously growing way of life. It is not just field of study or a job, it allows you to create, develop and evolve.</li>
                </div>
            </div>
           
        </div>
        <div className='recent-content-list' >
           <div className='text-container' >
                <div id='img2-recent' ></div>
            
                <div className='component-text'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>The most beautiful night in Iceland</li>
                    <li id='madag-text'>After days of cold, cloud and rain we packed up for our last night in Iceland. We had come to meet Aurora but as many will know it's not guaranteed.</li>
                </div>
            </div>
           
        </div>
           
    
    </div>
        </>

    )
}


export default MostRecent;