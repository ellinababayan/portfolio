import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
