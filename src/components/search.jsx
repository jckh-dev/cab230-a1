import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function Search(props) {

  const [countries, setCountries] = useState([]);

  // fetches data from API and stores it in the countries state
  useEffect(() => {
    fetch(`http://131.181.190.87:3000/countries`)
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  }, []);

  return (
    
    // country drop down box: takes the data in the countries state and maps it to a list of countries to display in the dropdown box
    <FormGroup className="CountrySearch">
      <Label htmlFor="countries"></Label>
      <Input type="select"
        onChange={(e) => {
         props.onChange(e.target.value);
        }}
        name="country"
        id="country"
      >
        <option key="country">Please Select A Country</option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </Input>
    </FormGroup>
  );
}

export default Search;

// https://www.cluemediator.com/react-select-async-dropdown-using-search-api