import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../App.css';
import avatar1 from '../../data//img/avatar-image-1.png'
import avatar2 from '../../data/img/avatar-image-2.png'
import avatar3 from '../../data/img/avatar-image.png'

const testimonialData = [
  {
    id: 1,
    name: 'The Prophet ﷺ said:',
    testimonial: '“The Fire of Hell was kindled for a thousand years until it became red, then it was kindled for a thousand years until it became white, then it was kindled for a thousand years until it became black. Now it is black and dark.”',
    designation: 'Sunan al-Tirmidhi 2592 (Sahih)',
    avatarSrc: avatar1, // Replace with the actual avatar image URL
  },
  {
    id: 2,
    name: 'The Prophet ﷺ said:',
    testimonial: '“The Fire of Hell was kindled for a thousand years until it became red, then it was kindled for a thousand years until it became white, then it was kindled for a thousand years until it became black. Now it is black and dark.”',
    designation: 'Sunan al-Tirmidhi 2592 (Sahih)',
    avatarSrc: avatar2, // Replace with the actual avatar image URL
  },
  {
    id: 3,
    name: 'The Prophet ﷺ said:',
    testimonial: "The grave is the first stage of the Hereafter. If one is saved from it, what follows will be easier for him; and if he is not saved from it, what follows will be more severe.",
    designation: 'Sunan al-Tirmidhi 2308 (Hasan)',
    avatarSrc: avatar3, // Replace with the actual avatar image URL
  },
  {
    id: 4,
    name: 'The Prophet ﷺ said:',
    testimonial: "That Day (Day of Judgment) will be equal to fifty thousand years.",
    designation: ' Sahih Muslim 2861a',
    avatarSrc: avatar3, // Replace with the actual avatar image URL
  },
  {
    id: 5,
    name: 'The Prophet ﷺ said:',
    testimonial: "Paradise is surrounded by hardships, and Hell is surrounded by desires.",
    designation: ' Sahih al-Bukhari 6487,',
    avatarSrc: avatar3, // Replace with the actual avatar image URL
  },
];

const TestimonialCard = ({ name, testimonial, designation, avatarSrc }) => (
 
  <div className="testimonial-card">
    <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (reviews, index) => (
                <svg key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#006B6A"
                  />
                </svg>
              ))}
            </div>
    <p className="text-md testimonial-text">{testimonial}</p>
    <div className='biodataDiv'>
    {/* <img src={avatarSrc} alt="Avatar" className="testimonial--author--avatar" /> */}
     <div className="name-and-desig">

     <p className="testimonial--author--name">
        {name}
      </p>
      <p className=" testimonial--author--designation">
        {designation}
      </p>
      </div>
    </div>
  </div>

);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
