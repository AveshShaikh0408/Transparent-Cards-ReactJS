import './App.css';
import Card from './components/Card';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <h1 class="heading">Transparent Card using React JS</h1>
      <div class="container">
          {Details.map((Details) =>(
            <Card 
              number = {Details.number}
              title = {Details.title}
              details = {Details.details}
              link = {Details.link}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
