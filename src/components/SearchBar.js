// Icon imports
import SearchIcon from './assets/images/icon-search.svg';

// styling
import './styling/css/SearchBar.css';

function SearchBar({ WordToSearch, setWordToSearch, Search, setData }){

    // event handlers
    const handleSearch = (event) =>{
        setWordToSearch(event.target.value);
        setData();
    }

    const handleClick = (event) => {
        event.preventDefault();
        Search(WordToSearch);
    }

    return (
        <form className="SearchBar">
          <input value={ WordToSearch } onChange={ handleSearch } type="text" placeholder="Search.."></input>
            <button onClick={ handleClick } type="submit">
                <img src={ SearchIcon } alt="search icon"></img>
            </button> 
        </form>
    );
}

export default SearchBar;