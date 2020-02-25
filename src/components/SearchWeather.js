import React from "react";

const SearchWeather = props => {
  return (
    <div className="search">
      <input
        onChange={e => props.change(e.target.value)}
        value={props.city}
        type="text"
        placeholder="Wpisz nazwę miasta..."
        onKeyPress={e => props.press(e)}
      />
      <button onClick={() => props.click()}>Szukaj</button>
    </div>
  );
};

export default SearchWeather;
