import searchIcon from "../icons/search.png"
import MovieCard from '../components/MovieCard.js'
import React, { useState, useEffect} from 'react'
import './HomePage.css'
import { useTheme } from '../components/ThemeContext';
import ToggleThemeButton from '../components/ToggleThemeButton';


const URL = "http://www.omdbapi.com?apikey=6fc33948";




function HomePage() {
    const { theme } = useTheme();
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        searchMovies("");
    },[])
    const searchMovies = async (title) => {
        const response = await fetch(`${URL}&s=${title}`)

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const movies = await response.json();
        console.log(movies);
        setSearchResults(movies.Search);
    }

    const handleSearchClick = () => {
        searchMovies(searchValue);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }


    }

  return (
    <div className="Container">
    <ToggleThemeButton />
      <h1>Movies!</h1>
      <div className="Search">
        <input placeholder="search movies..." onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}  // Handle the Enter key
                    />
        <img src={searchIcon} alt="search icon" onClick={handleSearchClick}></img>
      </div>
      
        {
            
            searchResults?.length > 0 ?
            
            (<div className="resultsContainer">
            {searchResults.map((result) => 
                <MovieCard result={result}/>
            )}
            </div>) :
             <div className="empty">No movies found </div>
        }
      
    </div>
  );
}

export default HomePage;