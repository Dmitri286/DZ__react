import './Input.css';

export const Input = ({ 
  title, 
  placeholder, 
  value, 
  disabled, 
  error, 
  errorText 
}) => {
  return (
    <div className="input-container">
      {title && <label className="input-title">{title}</label>}
      <input
        className={`input-field ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {error && <span className="error-text">{errorText}</span>}
    </div>
  );
};

export default Input;