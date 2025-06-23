import './card.css';

const Card = ({ title, price, description, buttonText }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <p className="price">{price}</p>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default Card;