import "./App.css";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className="container">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
