import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import mockData from "../src/mock-data.js";
import NumberOfEvents from "./components/NumberOfEvents.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CitySearch allLocations={mockData} />
      <EventList />
      <NumberOfEvents />
    </div>
  );
};

export default App;
