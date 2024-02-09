import { useRef } from 'react';
import './App.css';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';

const App = () => {
  const sliderRef = useRef(null);

  const slides = [
    { img: img1, title: 'Slide 01', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img2, title: 'Slide 02', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img3, title: 'Slide 03', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img4, title: 'Slide 04', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img5, title: 'Slide 05', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img6, title: 'Slide 06', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
  ];

  const handleNext = () => {
    const slidesContainer = sliderRef.current;
    slidesContainer.appendChild(slidesContainer.firstElementChild);
  };

  const handlePrev = () => {
    const slidesContainer = sliderRef.current;
    slidesContainer.prepend(slidesContainer.lastElementChild);
  };

  return (
    <div className="container">
      <div className="slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slides`}
            style={{ '--img': `url(${slide.img})` }}
          >
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={handlePrev}></span>
        <span className="next" onClick={handleNext}></span>
      </div>
    </div>
  );
};

export default App;
