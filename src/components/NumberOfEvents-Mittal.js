import { useState } from "react";
const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numEvents, setNumEvents] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumEvents(value);

    // Alerts
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "The number must be higher than 0.";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input"></label>
      <input
        type="number"
        id="number-of-events-input"
        className="number-of-events-input"
        placeholder="Number of Events"
        value={numEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
