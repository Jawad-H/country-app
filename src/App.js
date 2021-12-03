import React, { useEffect, useState } from 'react';
import './App.css';
import PublicIcon from '@material-ui/icons/Public'
import { Input, FormControl, InputLabel, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MaincountryCard from './Maincountry';
import axios from 'axios';
import MyMapComponent from './MyMapComponent';



function App() {
  const [input, setInput] = useState('');
  const [countries, setCountry] = useState([]);
  const [ltlg, setltlg] = useState([]);

  const Action = (event) => {
    event.preventDefault();
    const fetchUrl = `https://restcountries.com/v3.1/name/${input}`;
    async function fetchData() {
      const request = await axios.get(fetchUrl)
        .then(function (response) {
          // handle success
          setCountry(response.data);
          setltlg(response.data[0].latlng);

        })
        .catch(function (error) {
          // handle error
          console.log(error.message);
        })
    }
    fetchData();
  }

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <div className="header__icon">
          <PublicIcon />
        </div>
        <div className="header__title">
          <h2>Country App</h2>
        </div>
      </div>

      {/* Input Area */}
      <div className="input">
        {/* Input Field here */}
        <div className="input__field">
          <form>
            <FormControl>
              <InputLabel>✔️Enter Country Name</InputLabel>
              <Input value={input} onChange={(event) => {
                setInput(event.target.value);
              }} />
            </FormControl>
            <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={Action}  > <SearchIcon /></Button>
          </form>
        </div>
      </div>
      {/* Cards */}
      <div className="card">
        <div className="card__main__country">
          {
            countries.map(({ name, population, region, flags, capital }) => {
              console.log(name.common, population, region, flags.png, capital[0]);
              return <MaincountryCard name={name.common} population={population} region={region} flag={flags.png} capital={capital[0]} />

            })
          }
        </div>
        <div className="map">
          <h2 className="map__name">Map</h2>
          {
            countries.map(({ name, latlng }) => {
              console.log(latlng[0], latlng[1]);

              return <MyMapComponent key={name}
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={latlng[0]}
                lang={latlng[1]}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
