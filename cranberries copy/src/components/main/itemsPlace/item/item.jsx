import './item.css';
import React from 'react';
import { Link } from 'react-router-dom';

import rating from '/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg';

const style = {
    paddingTop: "1vh"
}

export default function Item() {
    return (
        <Link to={`/itemCard`} style={{ textDecoration: 'none', color: "black" }}>
            <div className="item">
                <div className='picture' />
                <div className='name'>Товар</div>
                <div className='row' style={ style }>
                    <div className='price'>€10</div>
                    <div className='rating'>
                        <img className='img' src={ rating } alt="" />
                        <div className='points'>4.8</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}