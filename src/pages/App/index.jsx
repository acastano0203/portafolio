import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Area from "../../components/Area";
import Project from "../../components/Project";

function App() {
  return (
    <Layout id="home">
      <Navbar />
      <Hero />
      <About />
      <Area />
      <Project />
    </Layout>
  );
}

export default App;
