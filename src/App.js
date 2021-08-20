import Intro from "./components/Intro";
import Experiences from "./components/Experiences";

import "./App.scss";
import experiences from "./data/experiences.json";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Experiences exps={experiences}></Experiences>
    </div>
  );
}

export default App;
