import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import mockData from "../src/mock-data.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CitySearch allLocations={mockData} />
      <EventList />
    </div>
  );
};

export default App;
