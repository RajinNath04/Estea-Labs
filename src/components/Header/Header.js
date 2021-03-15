import React, { Component } from 'react';
import Travel from '../../assets/travel.png';

import './Header.scss';
class Header extends Component {
    render() {
        return (
            <div className="headerSection">
                <header className='navbar'>
                    <div className='navbar__title navbar__item'><img src={Travel} style={{ height: '45px' }} /></div>
                    <div className='navbar__item'>Home</div>
                    <div className='navbar__item'>Special Offer</div>
                    <div className='navbar__item'>Login</div>
                    <div className='navbar__item'>Sign Up</div>
                    <div className='navbar__item'>Contact Us</div>
                    <div className='navbar__item'>English</div>
                    <div className='navbar__item'>BTC</div>
                </header>
            </div >
        );
    }
}

export default Header;