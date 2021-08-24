import logo from './logo.svg';
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://book.nyc3.digitaloceanspaces.com/pizza.jpg" className="App-logo" alt="logo" />
        <p>
          Wed app for Pizza Lover
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
