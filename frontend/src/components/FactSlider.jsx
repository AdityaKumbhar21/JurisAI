import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const facts = [
  {
    title: "Lawyers Spend 60% of Their Time on Document Review",
    description: "A study by McKinsey found that legal professionals spend up to 60% of their time reviewing documents, significantly reducing time for strategic tasks."
  },
  {
    title: "90% of Business Leaders Struggle with Complex Legal Language",
    description: "A survey by SME Finance Forum found that 90% of executives have difficulty understanding legal documents, leading to misinterpretations and delays."
  },
  {
    title: "Human Error in Legal Documents Costs Companies Millions",
    description: "Companies lose an average of 4% of their revenue due to misunderstood contracts, as per the World Commerce & Contracting (IACCM) report."
  },
  {
    title: "The Average Contract Takes 92 Minutes to Read",
    description: "Research shows that a typical contract (30+ pages) takes about 92 minutes to read, with comprehension dropping after 20 minutes."
  }
];

const FactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: i => (
      <div
        className={`w-2 h-2 mx-1 rounded-full ${i === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
      />
    ),
    appendDots: dots => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    )
  };

  return (
    <div className="fixed bottom-0 bg-primary font-sec p-6 z-50 h-60 left-4 right-4 rounded-xl">
      <div className="relative h-full">
        <Slider {...sliderSettings}>
          {facts.map((fact, index) => (
            <div key={index} className="px-4 py-6 text-center flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold mb-4">"{fact.title}"</h3>
              <p className="text-gray-700 text-lg">{fact.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FactSlider;
