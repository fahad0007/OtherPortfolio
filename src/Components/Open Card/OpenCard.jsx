import React, { useState } from 'react';
import './OpenCard.css'
const OpenCard = ({ type, heading, price, videoSrc, insideHeading, insideText, btnText }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);

    return (
        <section className={`card-section ${flipped ? 'flipped' : ''}`}>
            <div className="card">
                <div className="flip-card" onClick={handleFlip}>
                    <div className="flip-card__container">
                        <div className={`card-front ${flipped ? 'hidden' : ''}`}>
                            <div className={`card-front__tp card-front__tp--${type}`}>
                                {/* Replace this with your SVG */}
                                <svg className="card-front__icon" viewBox="0 0 60 60">
                                    {/* SVG path goes here */}
                                </svg>
                                {/* <h2 className="card-front__heading">{heading}</h2> */}
                                <p className="card-front__text-price">{price}</p>
                            </div>
                            <div className="card-front__bt">
                                <p className={`card-front__text-view card-front__text-view--${type}`}>
                                    View me
                                </p>
                            </div>
                        </div>
                        <div className={`card-back ${flipped ? '' : 'hidden'}`}>
                            <video className="video__container" autoPlay muted loop>
                                <source className="video__media" src={videoSrc} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className={`inside-page ${flipped ? '' : 'hidden'}`}>
                    <div className="inside-page__container">
                        <h3 className={`inside-page__heading inside-page__heading--${type}`}>
                            {insideHeading}
                        </h3>
                        <p className="inside-page__text">{insideText}</p>
                        {/* <a className={`inside-page__btn inside-page__btn--${type}`}>{btnText}</a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenCard;
