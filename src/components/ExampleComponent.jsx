import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  // State variables
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null);

  // Simulate fetching data or an object
  useEffect(() => {
    
    // Simulate an API call or data fetch
    const fetchData = () => {
      // This could be an API call, for example:
      // fetch('/api/data')
      //   .then(response => response.json())
      //   .then(result => setData(result))
      //   .catch(error => console.error('Error fetching data:', error));

      // For the purpose of this example, we use a hardcoded object
      const fetchedData = {
        get: () => true,
      };

      setData(fetchedData);
    };

    fetchData();
  }, []);

  // Use effect to handle data when it changes
  useEffect(() => {
    console.log('Data:', data);

    if (data && data.get) {
      setToggle(data.get());
    } else {
      console.error('data or data.get is undefined');
    }
  }, [data]);

  return (
    <div>
      <p>Toggle is {toggle ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ExampleComponent;
