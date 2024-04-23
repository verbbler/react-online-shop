import React from "react";
import "./itemForU.css";
import rating from '/Users/vera/Desktop/кодим/cranberries/src/images/rating.svg';

const color = {
    color: "white"
}

const picture = {
    width: "12vw",
    height: "12vw",
    backgroundColor: "lightgray",
    borderRadius: "1rem"
}

export default function ItemForU() {
    return (
        <div className="itemForU">
            <div className='itemForUPicture' style={ picture }/>
            <div className='itemForUName' style={ color }>Товар</div>
            <div className='itemForURow'>
                <div className='itemForUPrice' style={ color }>€10</div>
                <div className='itemForURating'>
                    <img className='itemForUImg' src={ rating } alt="" />
                    <div className='itemForUPoints' style={ color }>4.8</div>
                </div>
            </div>
        </div>
    )
}