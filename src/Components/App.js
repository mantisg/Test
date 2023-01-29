import {useState} from 'react'
import '../index.css'

function Submit(props) {
  const onClick = () => {
    const search = document.getElementById('search')
    props.setResult(search.value)
    search.value = ''
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <div className="banner">
      <div className="searchBar">
        <input
          id="search"
          type="text"
          placeholder="Elote"
          onKeyDown={handleKeyDown}
        />
        <button onClick={onClick}>
          Submintttt
        </button>
      </div>
    </div>
  )
}

function Result(props) {
  return (
    <div>
      {props.value}
    </div>
  )
}

function App() {
  const [result, setResult] = useState('')
  return (
    <div>
      <Submit setResult={setResult} />
      <Result value={result} />
    </div>
  );
}

export default App;