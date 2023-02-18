import './App.css';
import { useState, useEffect } from 'react';
// Component Imports
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchedWord from './components/SearchedWord';
import Definition from './components/Definition';
import Source from './components/Source';
import NotFound from './components/NotFound';

import axios from 'axios';


function App() {

  const [WordToSearch, setWordToSearch] = useState("keyboard");
  const [searchedWord, setSearchedWord] = useState();
  const [data, setData] = useState();
  const [darkMode, setDarkMode] = useState(true);
  const [fontStyle, setFontStyle] = useState("mono");

  // event handlers
  const Search = async (word) => {

    setSearchedWord(word);
    // api request here
    if(word)
      await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        // if no data is found, we set data back to default
        setData(null);
      });

  }

  // show result
  const showResult = () =>{
    if(searchedWord && data)
      return (
        <div className="result">
            <SearchedWord searchedWord={ searchedWord } data={ data }/>
            <Definition data={ data }/>
            <Source word={ searchedWord }/>
        </div>
      );
    if(searchedWord && data === null)
      return(
        <div className="result">
            <NotFound />
        </div>
      );
  }

  return (
    <div className={ darkMode ? `App ${ fontStyle } Dark`:`App ${ fontStyle }` }>
        <NavBar darkMode={ darkMode } setDarkMode={ setDarkMode } setFontStyle={ setFontStyle } />
        <SearchBar WordToSearch={ WordToSearch } setWordToSearch={ setWordToSearch } 
        Search={ Search } 
        setData={ setData }/>
        {showResult()}
    </div>
  );
}

export default App;
