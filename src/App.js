import "./App.css";
import Badnews from "./Components/Badnews";
import Scarecrow from "./Components/Scarecrow";
// import Scarecrow from "./Components/Scarecrow";

function App() {
  return (
    <div className="container">
      <header>
        <h3>404 NOT FOUND</h3>
      </header>
      <section>
        <div className="container-scare">
          <Scarecrow />
          <Badnews />
        </div>
      </section>
    </div>
  );
}

export default App;
