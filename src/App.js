import { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import mockData from "../src/mock-data.js";
import NumberOfEvents from "./components/NumberOfEvents.js";
import { getEvents } from "./api";

import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  };

  return (
    <div className="App">
      <CitySearch allLocations={mockData} />
      <EventList events={events} />
      <NumberOfEvents />
    </div>
  );
}

export default App;
