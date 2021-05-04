import React from "react";

const Country = ({
  onChangeForm,
  countryName,
  getCountry,
}) => {
  return (
    <div>
      <p>
        Enter a country name below to get the current currency rate for that
        country.
      </p>
      <input
        type="text"
        onChange={(e) => onChangeForm(e)}
        className="form-control"
        name="country"
        id="country"
        aria-describedby="countryName"
        placeholder="Search Country"
      />
      <button onClick={getCountry} type="button">
        Get Country Name
      </button>
      <h4>Country name:-{countryName}</h4>
    </div>
  );
};

export default Country;
