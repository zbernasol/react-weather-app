import './App.css';
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Drizzle Weather App</h1>
            <p>Sunday, May 2 09:57</p>
          </div>
        </div>
      </div>
      <Search />
      <Weather />
      <footer>
        <a href="https://github.com/zbernasol/react-weather-app">Open-source code</a> by <a href="https://www.linkedin.com/in/zian-angelica-bernasol-6a190a113/">Zian Bernasol</a>
      </footer>
    </div>
  );
}

export default App;
