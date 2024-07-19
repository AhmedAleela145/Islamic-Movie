import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Header({ onSearch, onSelectCategory, activeCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleLogout = () => {
    toast.warn(
      <div>
        <p>Are you sure you want to log out?</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={() => {
            navigate('/signin');
            toast.dismiss();
          }}
        >
          Yes
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: true,
      }
    );
  };

  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white fixed w-full z-10">
      <div className="text-2xl font-bold text-red-600">ISLAMIC MOVIES</div>
      
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded bg-gray-800 bg-opacity-50 text-white"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="p-2 bg-gray-800 bg-opacity-50 rounded">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="cursor-pointer text-white ml-4"
          onClick={handleLogout}
        />
      </div>
    </header>
  );
}

export default Header;
