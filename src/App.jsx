import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [europeanCountries, setEuropeanCountries] = useState([]);

  useEffect(() => {
    async function fetchEuropeanCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/region/europe');
        setEuropeanCountries(response.data);
      } catch (error) {
        console.error('Error fetching European countries data:', error);
      }
    }

    fetchEuropeanCountries();
  }, []);

  return (
    <div className="App">
        <div className='country-list'>
          {europeanCountries.map((country, index) => (
            <div key={index} className='country-card'>
              <img className='flag-image' src={country.flags.svg} alt={'flag of ${country.name.common}'} />
              <div className='country-infos'>
              <p className='country-name'>Name: {country.name.common}</p>
              <p className='country-capital'>Capital: {country.capital[0]}</p> 
              <p className='country-region'>Region: {country.region}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
