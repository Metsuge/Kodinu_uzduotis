import React from 'react';
import '../StyleMostRecent.css';

const MostRecent = () => {
    return(<>

    <div className='main-recent'>
        
        <div id='public-full-list'>
            <ul>
                <li id='word-public'>Most recent publications</li>
                <li id='word-full-list'>SEE FULL LIST</li>
            </ul>
        </div>
        <div className='recent-content-list' >
            <div className='img-recent img1r' ></div>
                <ul className='component-text-recent'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>Off-road adventures in Madagascar</li>
                    <li id='madag-text'>While he lemurs of Madagascar may understandably be the country's major draw there is so much more to discover on what is the world's fourth largest island.</li>
                </ul>
        </div>
        
        <div className='recent-content-list' >
            <div className='img-recent img2r' ></div>
                <ul className='component-text-recent'>
                    <li id='reviews'>TRIP SUGGESTIONS</li>
                    <li id='off-road'>Perfect places to visit for Architecture enthusiasts</li>
                    <li id='madag-text'>Architecture is a very complex and continuously growing way of life. It is not just field of study or a job, it allows you to create, develop and evolve.</li>
                </ul>
        </div>

        <div className='recent-content-list' >
            <div className='img-recent img3r' ></div>
                <ul className='component-text-recent'>
                    <li id='reviews'>TRAVEL REVIEWS</li>
                    <li id='off-road'>The most beautiful night in Iceland</li>
                    <li id='madag-text'>After days of cold, cloud and rain we packed up for our last night in Iceland. We had come to meet Aurora but as many will know it's not guaranteed.</li>
                </ul>
        </div>
    </div>
        </>
    )
}


export default MostRecent;