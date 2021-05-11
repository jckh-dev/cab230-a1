import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

function Search(){

    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleInputChange = value => {
        setValue(value);
    };

    const handleChange = value => {
        setSelectedValue(value);
    }

    const loadOptions = (inputValue) => {
        return fetch(`http://131.181.190.87:3000/countries`)
        .then(res => res.json());
    };
    // should there be some further altering of the JSON to properly display in the drop down?

    return (
        <div className="CountrySearch">

            {/* <h3>Search Countries</h3> */}

            <pre>Input Value: "{inputValue}"</pre>
            
            {/* Manages country drop down menu behaviour - load in country list an async search via keyboard */}
            <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                getOptionLabel={e => e.title}
                getOptionValue={e => e.id}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={handleChange}
            />

            <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>

        </div>
    );
}

export default Search;

// Countries are loading into the list but the text is not showing....

// https://www.cluemediator.com/react-select-async-dropdown-using-search-api