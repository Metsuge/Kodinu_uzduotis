import React from 'react';
import  '../StyleIndia.css';

import waterscape from '../images/waterscape.jpg';
import desert from '../images/desert.jpg';
import elephant from '../images/elephant.jpg';

const India = () => {
    return (<>
        <div className='main-india'>
                <ul className='pic-list'>
                    <li><img src={waterscape}></img></li>
                    <li><img src={desert}></img></li>
                    <li><img src={elephant}></img></li>
                </ul>
            <div className='big-pic'>
                <div className='india-text'>
                    <p className='photo-mem'>PHOTO MEMORIES</p>
                    <p className='h1'>Sightseeing in India</p>
                    <p id='album'>We have created an album of our last month adventures in the India.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default India;

