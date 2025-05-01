import './styles.css';

const LoadingContainer = ({ content }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{content}</p>
    </div>
  );
};

export default LoadingContainer;
