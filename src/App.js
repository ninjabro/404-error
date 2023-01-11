import "./App.css";
import Scarecrow from "./Scarecrow.png";

function App() {
  return (
    <div className="container">
      <header>
        <h3>404 NOT FOUND</h3>
      </header>
      <section>
        <div className="container-scare">
          <div className="left-side">
            <img src={Scarecrow} alt="scarecrow" />
          </div>

          <div className="right-side">
            <h1>I have bad news for you</h1>
            <p>
              The page you are looking for might be removed or is temporarily
              unavaible
            </p>
            <button className="btn-black">BACK TO HOMEPAGE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
