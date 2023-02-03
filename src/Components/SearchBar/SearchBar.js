import React, {useState} from 'react';
import './styles.css'
import {weatherData} from "C:/Users/joshu/test/src/data.js"

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Submit(props) {
  const onClick = () => {
    const search = document.getElementById('search')
    props.setResult(search.value)
    props.setIsSearching(true)
    if (search.value == '') {
      props.setIsSearching(false)
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <div className="banner">
      <h1 className="tittie">
        Spicy Weather
      </h1>
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

function search(value, data) {
	return data.filter(i => value.toLowerCase() == i.name)
}

function Result(props) {
	const filterResults = search(props.value, weatherData)
  
  if (props.isSearching == true)
    if (!filterResults || filterResults.length === 0) {
      filterResults.push({
        name: `Result ${props.value} Not Found`,
        temp: "",
        spice: ""
      })
    } 
    return (
      <div>
        <div className="resultContainer">
          {filterResults.map((data, key) => {
            return (
              <div key={key}>
                {data.name +
                ", " +
                data.temp +
                ", " +
                data.spice}
              </div>
            )
          })}
        </div>
      </div>
    )
}

function SearchBar(props) {
	const [isSearching, setIsSearching] = useState(false)
  	const [result, setResult] = useState('')
  	return (
    	<div>
      		<Submit setResult={setResult} setIsSearching={setIsSearching} />
      		<Result value={result} isSearching={isSearching}/>
    	</div>
  	);
}

export default SearchBar;