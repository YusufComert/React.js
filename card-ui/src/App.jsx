import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eos distinctio sunt quaerat odit expedita voluptates culpa blanditiis quisquam. Dolores debitis eligendi soluta autem placeat aliquid enim natus, aperiam corporis."
              />
            </div>
            <div className="column">
              <Course
                image={Boostrap}
                title="Boostrap 5"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eos distinctio sunt quaerat odit expedita voluptates culpa blanditiis quisquam. Dolores debitis eligendi soluta autem placeat aliquid enim natus, aperiam corporis."
              />
            </div>
            <div className="column">
              <Course
                image={CSharp}
                title="Komple Web"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eos distinctio sunt quaerat odit expedita voluptates culpa blanditiis quisquam. Dolores debitis eligendi soluta autem placeat aliquid enim natus, aperiam corporis."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eos distinctio sunt quaerat odit expedita voluptates culpa blanditiis quisquam. Dolores debitis eligendi soluta autem placeat aliquid enim natus, aperiam corporis."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
