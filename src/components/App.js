import '../style.css';
import React, { Component } from 'react';

import Featured from './Featured';
import MostRecent from './MostRecent';
import WinATrip from './WinATrip';
import Subcribe from './Subscribe';
import Popular from './Popular';
import India from './India';
import Trending from './Trending';


export class App extends Component {
    render() {
        return (<html>
            <div className='header'>
                <div className='explord'><li >EXPLORD</li></div>
                <div className='header-name'><li>A Travelers' Blog</li></div> 
                <div className='header-text'>
                    <li>DISCOVER</li>
                    <li>HOME</li>
                </div>
            </div>
            <body id='main-content'>
                <div className='featured'><Featured /></div>
                <div className='mostrecent'><MostRecent/></div>
                <div className='win-a-trip'><WinATrip /></div>
                <div className='subscibe'><Subcribe /></div> 
                <div className='popular'><Popular /></div>
                <div className='india'><India /></div>
                
                <div className='trending'><Trending /></div>
            </body>
            <footer className='footer'>
                <div className='nav'>
                     <ul id='nav-li'>
                        <li>Follow us</li>
                        <li className='links'><a>Fb</a><a>Ins</a><a>Tw</a><a>Fb</a><a>Yt</a></li>
                        <br></br>
                        <li>Our portfolio</li>
                        <li>daumantasbanys.lt</li>
                    </ul>
                    <ul>
                        <li>Links</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Sitemap</li>
                        <li>Contribute</li>
                    </ul>
                    <ul >
                        <li>Navigation</li>
                        <li>Home</li>
                        <li>Discover</li>
                        <li>Search</li>
                        <li>Upload</li>
                    </ul>
                    <ul id='footer-left'>
                        <li>EXPLORD <span className='links'>&copy; 2018</span></li><br/>
                        <li>A Travelers' Blog</li>
                        <li className='footer-text'>Our main focus is to provide high quality, objective,<br/>
                        and informative travelling content from over the world.</li>
                    </ul>
                </div>
            </footer>
            </html>
        )
    }
}

export default App
