import React, { useState, useEffect } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function Search(props) {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`http://131.181.190.87:3000/countries`)
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  }, []);

  return (
    // restart this ---- async select is not the correct usage - will query the server every button press......
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