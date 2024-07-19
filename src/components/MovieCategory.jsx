import React, { useState, useEffect } from 'react';
import amongTheBelievers from '../images/among the believers.png';
import bilal from '../images/bilaal.png';
import capar from '../images/capar.png';
import fateh from '../images/fateh.png';
import freeMan from '../images/free man.jpg';
import heyzultan from '../images/heyzultan.png';
import jerusalem from '../images/jerusalam.png';
import jinnah from '../images/jinnah.png';
import khudaKaLiye from '../images/khuda ka liye.png';
import kuma from '../images/kuma.png';
import malazgirt from '../images/malazgirt.png';
import muezin from '../images/muezin.png';
import oneDayInTheHaram from '../images/one day in the haram.png';
import oneNightInAlAqsa from '../images/one night in al aqsa.png';
import risaala from '../images/risaala.png';
import salahudin from '../images/salahudin.png';
import sinnerInMecca from '../images/sinner in mecca.png';
import theJourney from '../images/the journey.png';
import turkler from '../images/turkler.png';
import wadjda from '../images/wadjda.png';

const moviesData = [
  {
    category: "Turkey",
    image: amongTheBelievers,
    title: "Among the Believers",
    video: "https://youtu.be/lNut1K34aFg"
  },
  {
    category: "Turkey",
    image: malazgirt,
    title: "Salahudiin",
    video: "https://youtu.be/lNut1K34aFg"
  },
  {
    category: "Turkey",
    image: turkler,
    title: "Krulus",
    video: "https://youtu.be/lNut1K34aFg"
  },
  {
    category: "Turkey",
    image: bilal,
    title: "Bilal",
    video: "https://youtu.be/KU-26wLX6m8"
  },
  {
    category: "Turkey",
    image: capar,
    title: "Capar",
    video: "https://youtu.be/0d1fd6jeK4E"
  },
  {
    category: "Turkey",
    image: fateh,
    title: "Fateh",
    video: "https://youtu.be/j4TOUrxzd28"
  },
  {
    category: "Turkmanistan",
    image: freeMan,
    title: "Free Man",
    video: "https://youtu.be/3Dqqv15Up_A"
  },
  {
    category: "Turkmanistan",
    image: heyzultan,
    title: "Heyzultan",
    video: "https://youtu.be/j1lzkWPJuM4?list=PL9-8NdEyCHsftt97f9qcsMb7SsRJmvL-n"
  },
  {
    category: "Turkmanistan",
    image: jerusalem,
    title: "Jerusalem",
    video: "https://youtu.be/oyKOJTsxqCk"
  },
  {
    category: "Pakistan",
    image: jinnah,
    title: "Jinnah",
    video: "https://youtu.be/ybr4eAA_3v8"
  },
  {
    category: "Pakistan",
    image: khudaKaLiye,
    title: "Khuda Ka Liye",
    video: "https://youtu.be/Ww75X9JpEQg"
  },
  {
    category: "Pakistan",
    image: kuma,
    title: "Kuma",
    video: "https://youtu.be/NOlzbU30gqs"
  },
  {
    category: "Saudi Arabia",
    image: malazgirt,
    title: "Malazgirt",
    video: "https://youtu.be/LuXj9iq9SWs"
  },
  {
    category: "Saudi Arabia",
    image: muezin,
    title: "Muezin",
    video: "https://youtu.be/EOnGyIxJoVw"
  },
  {
    category: "Saudi Arabia",
    image: oneDayInTheHaram,
    title: "One Day in the Haram",
    video: "https://youtu.be/DLfmXCzyHeU"
  },
  {
    category: "UAE",
    image: oneNightInAlAqsa,
    title: "One Night in Al Aqsa",
    video: "https://youtu.be/gVHScCN7C-w"
  },
  {
    category: "UAE",
    image: risaala,
    title: "Risaala",
    video: "https://youtu.be/SPzK4zq4-Ow"
  },
  {
    category: "Bangladesh",
    image: salahudin,
    title: "Salahudin",
    video: "https://youtu.be/oyKOJTsxqCk"
  },
  {
    category: "Bangladesh",
    image: sinnerInMecca,
    title: "Sinner in Mecca",
    video: "https://youtu.be/mow7RGPoLIM"
  },
  {
    category: "Bangladesh",
    image: theJourney,
    title: "The Journey",
    video: "https://youtu.be/eVpMVw22wcM"
  },
  {
    category: "UAE",
    image: turkler,
    title: "Turkler",
    video: "https://youtu.be/CjqyHdkmHAU"
  },
  {
    category: "UAE",
    image: wadjda,
    title: "Wadjda",
    video: "https://youtu.be/s2Q2JvhWjyE"
  },
  // Add more movie data as needed
];

function MovieCategory({ selectedCategory, searchTerm, onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching movies from an API
    setMovies(moviesData);
  }, []);

  const filteredMovies = movies
    .filter(movie => selectedCategory === 'All Movies' || movie.category === selectedCategory)
    .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mt-16 w-full max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 p-2 rounded cursor-pointer"
            onClick={() => onMovieClick(movie.video, movie.title)}
          >
            <img src={movie.image} alt={movie.title} className="w-full h-auto rounded" />
            <p className="mt-2">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCategory;
