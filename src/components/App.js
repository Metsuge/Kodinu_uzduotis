import '../style.css';
import React, { Component } from 'react';

import Featured from './Featured';
import MostRecent from './MostRecent';
import WinATrip from './WinATrip';
import Subcribe from './Subscribe';
import Popular from './Popular';
import India from './India';
import Trending from './Trending';

import logo from '../images/logo.jpg'
import fblogo from '../images/fblogo.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import yt from '../images/yt.png';

export class App extends Component {
    render() {
        return (<div className='container'>
            <header>
                <div className='explord'><img alt='logo' src={logo}></img></div>
                <div className='header-name'><ul><li>A Travelers' Blog</li></ul></div> 
                <ul className='header-text'>
                    <li>DISCOVER</li>
                    <li>HOME</li>
                </ul>
            </header>
            <main id='main-content'>
                <div className='featured'><Featured /></div>
                <div className='mostrecent'><MostRecent/></div>
                <div className='win-a-trip'><WinATrip /></div>
                <div className='subscibe'><Subcribe /></div> 
                <div className='popular'><Popular /></div>
                <div className='india'><India /></div>
                
                <div className='trending'><Trending /></div>
            </main>
            <footer className='footer'>
                <div className='nav'>
                     <ul id='nav-li'>
                        <li>Follow us</li>
                            <li className='links'>
                                <a href='#'>
                                    <img src={fblogo} className='link-icon fb-link'></img>
                                </a>
                                <a href='#'>
                                    <img src={twitter} className='link-icon twitter-link'></img>
                                </a>
                                <a href='#'>
                                    <img src={instagram} className='link-icon insta-link'></img>
                                </a>
                                <a href='#'>
                                    <img src={yt} className='link-icon yt-link'></img>
                                </a>
                            </li>
                        <br></br>
                        <li><a href='#'>Our portfolio</a></li>
                        <li><a>daumantasbanys.lt</a></li>
                    </ul>
                    <ul>
                        <li><a href='#'>Links</a></li>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Contact us</a></li>
                        <li><a href='#'>Sitemap</a></li>
                        <li><a href='#'>Contribute</a></li>
                    </ul>
                    <ul >
                        <li><a href='#'>Navigation</a></li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Discover</a></li>
                        <li><a href='#'>Search</a></li>
                        <li><a href='#'>Upload</a></li>
                    </ul>
                        
                    <ul id='footer-left'>
                        <li>
                            <div className='explord'><img alt='logo' src={logo}></img></div>
                            <span className='copy'>&copy; 2018</span>
                            <br/>
                        </li>
                        <li>A Travelers' Blog</li>
                        <li className='footer-text'>Our main focus is to provide high quality, objective,<br/>
                        and informative travelling content from over the world.</li>
                    </ul>
                </div>
            </footer>
            </div>
        )
    }
}

export default App
