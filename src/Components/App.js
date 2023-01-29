import {useState} from 'react'

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
    <div>
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