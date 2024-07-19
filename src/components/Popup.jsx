// src/components/Popup.jsx
import React from 'react';

function Popup({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{content}</div>
        <button onClick={onClose} className="px-4 py-2 bg-red-600 text-white rounded">Close</button>
      </div>
    </div>
  );
}

export default Popup;
