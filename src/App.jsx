import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    background: 'linear-gradient(to right, #f9d9eb, #e9d5f5)',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    left: 0
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#d53f8c',
    animation: 'bounce 1s infinite'
  },
  heart: {
    fontSize: '6rem',
    color: '#e53e3e',
    filter: 'drop-shadow(0px 2px 5px rgba(0,0,0,0.2))',
    transition: 'transform 0.5s ease-in-out'
  },
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' }
  }
};

function App() {
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    const interval = setInterval(() => {
      setScale(prevScale => prevScale === 1 ? 1.2 : 1);
    }, 1000);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  return (
    <div style={styles.container}>
      <h1 style={{...styles.title, animation: 'bounce 1s infinite'}}>
        Hi Trung...!
      </h1>
      
      <div style={{...styles.heart, transform: `scale(${scale})`}}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="120" 
          height="120" 
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}

export default App;