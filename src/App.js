import Intro from "./components/Intro";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.scss";
import experiences from "./data/experiences.json";
import projects from "./data/projects.json";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Experiences exps={experiences}></Experiences>
      <Projects projs={projects}></Projects>
      <Skills></Skills>
    </div>
  );
}

export default App;
