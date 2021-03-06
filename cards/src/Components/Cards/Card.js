import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './Card.css';

const Card = (user) => {

    return (
        <div className="flip-container dib bg-white tc dib ba b--green br3 ma1 grow pa1 w-10">
            <div className='flipper'>
                <div className='front w-100'>
                    <div className="tc">
                        <img src={logo} alt='company logo' className="br-100 h3 w3 dib"/>
                        <h1 className="f3">{user.name}</h1>
                        <hr className="mw3 bb bw1 b--black-10"/>
                        {
                            user.industry.map((sector, i) => {
                            return (
                                <p 
                                key={i}
                                className='f6 fw6 mid-gray dib'>{user.industry[i]+', '} </p>
                                )
                            })
                        } 
                        <h3 className='f5 black-50'>{user.city}, {user.state}.</h3>
                        <h3 className='f5 black-50'>{user.contact}</h3>
                    </div>
                </div>
                    <div className='back w-100'>
                        <div className="tc">
                            <h1 className="f4">{user.name}</h1>
                            <hr className="mw3 bb bw1 b--black-10"/>
                        </div>
                        <p className="lh-copy measure tj f6 black-70">{user.bio}</p>
                        <Link to="/page" target='blank' className="btn btn-outline-success tr">Go to Page</Link>
                    </div>
            </div>

        </div>
    )
}

export default Card;