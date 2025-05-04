import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Card, Grid } from 'antd';
import { useEffect, useRef, useState } from 'react';

import './styles.css';

const { useBreakpoint } = Grid;

const CategoryCarousel = ({ category, items }) => {
  const [cardWidth, setCardWidth] = useState(0);

  const screens = useBreakpoint();
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        const visibleCount = screens.lg ? 4 : 1;
        setCardWidth(sliderRef.current.clientWidth / visibleCount);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [screens]);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };
  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-4">
      <h1>{category}</h1>
      <div className="category-slider relative overflow-hidden">
        <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
          <Button onClick={scrollPrev} color="default" variant="solid">
            <CaretLeftOutlined />
          </Button>
        </div>
        <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
          <Button onClick={scrollNext} color="default" variant="solid">
            <CaretRightOutlined />
          </Button>
        </div>
        <div ref={sliderRef} className="flex gap-x-4 overflow-x-auto scroll-smooth">
          {items.map((card, index) => (
            <Card
              key={index}
              className="hover:opacity-80 cursor-pointer"
              style={{ width: cardWidth, flex: '0 0 auto' }}
            >
              <div className="mb-3">
                <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover aspect-[2/1]" />
              </div>
              <p>{card.subCategory}</p>
              <h4>{card.title}</h4>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
