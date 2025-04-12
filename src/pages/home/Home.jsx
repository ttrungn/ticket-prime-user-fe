import { Button, Card, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';

import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';

import './styles.css';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';

const Home = () => {
  const sliderRef = useRef(null);
  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://picsum.photos/200/300?random=${index}`,
    subCategory: `Subcategory ${index + 1}`,
    title: `Title ${index + 1}`,
  }));
  return (
    <>
      <CustomCarousel />
      <div>
        <h1>Filter Box</h1>
      </div>
      <div>
        <div className="categories-slider relative" ref={sliderRef}>
          <CategoryCarousel category="Categories" items={cards} />
          <CategoryCarousel category="Categories" items={cards} />
          <CategoryCarousel category="Categories" items={cards} />
          <CategoryCarousel category="Categories" items={cards} />
          <CategoryCarousel category="Categories" items={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
