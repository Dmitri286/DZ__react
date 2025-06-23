import './App.css';
import Button from './button.jsx';
import Card from './card.jsx';

export default function App() {
  return (
    <div>
      <Button>FIND OUT MORE</Button>
      <div className="app">
        <Card
          title="– ROBO –"
          price="15.000 ₽"
          description="УМК по робототехнике"
          buttonText="Оставить заявку"
        />
        <Card
          title="– ROBO –"
          price="10.000 ₽"
          description="УМК по программированию"
          buttonText="Оставить заявку"
        />
      </div>
    </div>

  );
}


