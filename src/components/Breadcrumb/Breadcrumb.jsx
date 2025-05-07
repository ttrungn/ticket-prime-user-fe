import { Link } from 'react-router-dom';
import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="flex items-center text-white text-base">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link to={item.link}>
              <span className="text-white font-bold hover:underline">{item.title}</span>
            </Link>
          ) : (
            <span className="text-white font-bold">{item.title}</span>
          )}
          {index < items.length - 1 && <span className="mx-2 text-white">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
