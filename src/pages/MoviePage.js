import { useLocation, Link } from "react-router-dom";
import './MoviePage.css';
import { useTheme } from '../components/ThemeContext';
import ToggleThemeButton from '../components/ToggleThemeButton';
import { useEffect } from "react";

function MoviePage() {
  const location = useLocation();
  const movie = location.state;
  const { theme } = useTheme();
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
  return (
    <div className="Container">
        <ToggleThemeButton/>
      <div className="title">{movie.Title}</div>
      <div className="poster" onClick={() => alert("no video avaible from the API :(")}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt="Movie Poster"
        />
      </div>
      <div className="description">
        <p>
          A lot of text! A lot of text! A lot of text! A lot of text! A lot of
          text! A lot of text! A lot of text! A lot of text! A lot of text! A
          lot of text! A lot of text!
        </p>
      </div>
      <Link to='/' className="link">Go Home</Link>
    </div>
  );
}

export default MoviePage;
