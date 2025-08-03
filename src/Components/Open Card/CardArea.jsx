import React from 'react';
import Card from './OpenCard';

const cardData = [
    {
        type: 'city',
        heading: 'City break',
        price: '— Sahih al-Bukhari 6416',
        videoSrc: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
        insideHeading: 'The Prophet ﷺ said:',
        insideText: "Be in this world as if you were a stranger or a traveler along a path.",
        btnText: 'View deals',
    },
    {
        type: 'ski',
        heading: 'Ski trip',
        price: 'Sahih Muslim 2682',
        videoSrc: 'https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611',
        insideHeading: 'The Messenger of Allah ﷺ said:',
        insideText: "Frequently remember the destroyer of pleasures — death.",
        btnText: 'View deals',
    },
    {
        type: 'beach',
        heading: 'Beach time',
        price: ' Sunan At-Tirmidhi 2459 (Hasan)',
        videoSrc: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
        insideHeading: 'The Prophet ﷺ said:',
        insideText: '“The wise one is he who holds himself accountable and works for what comes after death. The foolish one is he who follows his desires and then hopes that Allah will forgive him.”',
        btnText: 'View deals',
    },
    {
        type: 'camping',
        heading: 'Camping trek',
        price: 'Sahih al-Bukhari 3244',
        videoSrc: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
        insideHeading: 'The Prophet ﷺ said:',
        insideText: "Allah says: I have prepared for My righteous slaves what no eye has seen, no ear has heard, and no heart has ever imagined.",
        btnText: 'View deals',
    }
];

const CardArea = () => {
    return (
        <div className="card_section">
        <main className="card_area_main">
            <section className="card-area">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        type={card.type}
                        heading={card.heading}
                        price={card.price}
                        videoSrc={card.videoSrc}
                        insideHeading={card.insideHeading}
                        insideText={card.insideText}
                        btnText={card.btnText}
                    />
                ))}
            </section>
        </main>
        </div>
    );
};

export default CardArea;
