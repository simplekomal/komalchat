// components/BackgroundImageDiv.jsx
import React from 'react';
import imgg from './img/img1.png'


const Backdiv = () => {

  return (
    <div>
      <div className="background-image-container"
      style={{
        background: `url(${imgg}) center/cover no-repeat`, // Use the imported image
        backgroundSize: 'cover',
        height: '400px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '24px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      
    
    </div>
    </div>
  );
};

export default Backdiv;
