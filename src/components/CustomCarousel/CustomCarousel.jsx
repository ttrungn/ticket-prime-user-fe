import { Carousel } from 'antd';

import './styles.css';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function CustomCarousel() {
  return (
    <Carousel
      className="mb-4"
      autoplay={{ dotDuration: true }}
      autoplaySpeed={3000}
      arrows
      infinite={true}
      effect="fade"
    >
      <div>
        <h3 className="rounded-xl" style={contentStyle}>
          1
        </h3>
      </div>
      <div>
        <h3 className="rounded-xl" style={contentStyle}>
          2
        </h3>
      </div>
      <div>
        <h3 className="rounded-xl" style={contentStyle}>
          3
        </h3>
      </div>
      <div>
        <h3 className="rounded-xl" style={contentStyle}>
          4
        </h3>
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
