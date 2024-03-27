import { useState, useEffect } from "react";
const CitySearch = ({ allLocations }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    console.log("allLocations", allLocations);
    if (allLocations && allLocations.length > 0) {
      const initialLocations = allLocations
        .flatMap((eventObj) => eventObj?.items ?? [])
        .map((event) => event.location);
      setSuggestions(initialLocations);
    }
  }, [allLocations]);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = suggestions.filter((location) => {
      if (typeof location === "string") {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      }
      return false;
    });
    setQuery(value);
    setSuggestions(filteredLocations);
  };
  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
  };
  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => {
            return (
              <li onClick={handleItemClicked} key={suggestion + index}>
                {suggestion}
              </li>
            );
          })}
          <li key="See all cities" onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
export default CitySearch;
