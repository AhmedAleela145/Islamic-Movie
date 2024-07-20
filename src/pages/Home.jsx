import React, { useState } from 'react';
import backgroundImage from '../images/background.png';
import Header from '../components/Header';
import Popup from '../components/Popup';
import MovieCategory from '../components/MovieCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const categories = ['Turkey', 'Pakistan', 'Turkmanistan', 'Saudi Arabia', 'UAE', 'Bangladesh', 'All Movies'];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Home');// State for selected category
  const [searchTerm, setSearchTerm] = useState('');// State for search term
  const [showPopup, setShowPopup] = useState(false);// State for popup visibility
  const [popupContent, setPopupContent] = useState('');// State for popup content
  const [popupTitle, setPopupTitle] = useState(''); // State for popup title
  const [error, setError] = useState(null); // State for error handl

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);// Update selected category
  };

  const handleSearch = (term) => {
    setSearchTerm(term);// Update search term
  };

  const handleWatchClick = () => {
     // Show watch popup
    setPopupContent('You can watch a movie by picking your favourite kind of movies.');
    setPopupTitle('Watch Now');
    setShowPopup(true);
  };

  const handleMoreInfoClick = () => {
    // Show more information popup
    setPopupContent('Here you can watch more Islamic movies. You can search and watch.');
    setPopupTitle('More Information');
    setShowPopup(true);
  };

  const handleMovieClick = (videoLink, title) => {
    try {
      console.log("Video Link: ", videoLink);
      console.log("Title: ", title);
      setPopupContent(
        <iframe
          width="560"
          height="315"
          src={convertToEmbedURL(videoLink)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
      setPopupTitle(title);
      setShowPopup(true);
    } catch (err) {
      console.error('Error handling movie click:', err);
      setError(err.message);// Set error message
    }
  };

  const convertToEmbedURL = (url) => {
    try {
      console.log("Convert URL: ", url);
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;// Convert to embed URL
      }
      return url;
    } catch (err) {
      console.error('Error converting URL:', err);
      setError(err.message); // Set error message
    }
  };

  if (error) {
    return (
      <div>
        <h1>Something went wrong:</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-y-auto">
      <Header onSearch={handleSearch} onSelectCategory={handleCategoryClick} activeCategory={selectedCategory} />
      <ToastContainer />
      <div className="relative w-full h-96">
        <img src={backgroundImage} alt="Background" className="absolute w-full h-full object-cover opacity-50" />
        <div className="relative flex flex-col items-center text-dark text-center p-4">
          <h1 className="text-4xl font-bold mt-24">Islamic Movie Highlight</h1>
          <p className="mt-4 max-w-xl">
            Here you can find a collection of Islamic movies from various countries, showcasing the beauty and diversity of Islamic culture.
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="px-4 py-2 bg-red-600 text-black rounded" onClick={handleWatchClick}>Watch now</button>
            <button className="px-4 py-2 bg-gray-700 text-black rounded" onClick={handleMoreInfoClick}>More information</button>
          </div>
          <div className="mt-8 w-full max-w-screen-xl">
            <div className="flex space-x-4 justify-center bg-black p-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 ${selectedCategory === category ? 'bg-red-600' : 'bg-gray-800'} rounded text-white`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-4">
        <div className="w-full max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{selectedCategory === 'Home' ? 'Top Picks' : selectedCategory}</h2>
          <MovieCategory selectedCategory={selectedCategory} searchTerm={searchTerm} onMovieClick={handleMovieClick} />
        </div>
      </div>
      {showPopup && <Popup title={popupTitle} content={<div className="text-black">{popupContent}</div>} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default Home;
