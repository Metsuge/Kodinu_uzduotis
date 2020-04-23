import React from 'react';
import '../StyleTrending.css';

const Trending = () => {
    return(<>

    <div className='main-trending'>
        
      
            <li id='word-public-trend'>Trending this week in travel reviews</li>
            
    
        <div className='trend-content-list' >
           <div className='trend-container' >
                <ul className='component-trend'>
                    <li><div className='img-trend img1' ></div></li>
                    <div className='trend-text'>
                        <li id='title-trend'>Chineese new year - The year of the Dog</li>
                        <li id='madag-text'>It's Chineese New Year this week, welcome to the year of the dog! We've looked at the 12 animals of the Chinese zodiac and suggested a tour for each.</li>
                    </div>
                </ul>
                <ul className='component-trend'>
                    <li><div className='img-trend img2' ></div></li>
                    <div className='trend-text'>
                        <li id='title-trend'>Birds, beasts and beauties of Bangladesh</li>
                        <li id='madag-text'>Tour leader Amanda has just returned to Dhaka ready to lead her third tour in Bangladesh. Here she explains how the country differed from her expectations.</li>
                    </div>
                </ul>
                <ul className='component-trend'>
                    <li><div className='img-trend img3' ></div></li>
                    <div className='trend-text'>
                        <li id='title-trend'>The Empty Quarter Desert - Rub al Khali</li>
                        <li id='madag-text'>The Arabic name Rub al Khali means "empty quarter". The name was given to it because it's a huge strech of unbroken sand desert that has bested kings.</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
        </>

    )
}


export default Trending;