import SearchBar from './SearchBar/SearchBar.js';
import {weatherData} from "../data.js"
import '../index.css'

function App() {
  return (
    <div>
      <SearchBar data={weatherData} />
    </div>
  );
}

export default App;