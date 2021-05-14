import React, { useState, useEffect } from 'react';


function Search(props){

    const [countries, setCountries] = useState([]);
    
    
    useEffect(() => {
        fetch(`http://131.181.190.87:3000/countries`)
          .then((res) => res.json())
          .then((countries) => setCountries(countries));
      }, []);

    return (
        // restart this ---- async select is not the correct usage - will query the server every button press......
        <div className="CountrySearch">

    <div>
      <label htmlFor="countries">Choose a Country:</label>
      <select
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
        name="country"
        id="country"
      >
        <option key="">Please select a user</option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>

        </div>
    );
}

export default Search;

// https://www.cluemediator.com/react-select-async-dropdown-using-search-api