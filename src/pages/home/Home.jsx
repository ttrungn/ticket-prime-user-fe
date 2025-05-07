import { useEffect, useRef, useState } from 'react';

import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';

import './styles.css';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';

const Home = () => {
  const [cards, setCards] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    setCards([
      ...Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        imageUrl: `https://picsum.photos/200/300?random=${index}`,
        subCategory: `Subcategory ${index + 1}`,
        title: `Title ${index + 1}`,
      })),
    ]);
  }, []);
  return (
    <div>
      <CustomCarousel />
      <div>
        <div className="categories-slider relative" ref={sliderRef}>
          {[...Array(4)].map((_, index) => (
            <CategoryCarousel key={index} category="Categories" items={cards} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
