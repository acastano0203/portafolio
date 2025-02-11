import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Area from "../../components/Area";
import Project from "../../components/Project";
import LazyLoad from "../../components/LazyLoad";
function App() {
  return (
    <Layout id="home">
      <LazyLoad direction="up">
        <Navbar />
        <Hero />
      </LazyLoad>
      <LazyLoad direction="up">
        <About />
      </LazyLoad>
      <LazyLoad direction="up">
        <Area />
      </LazyLoad>
      <LazyLoad direction="up">
        <Project />
      </LazyLoad>
    </Layout>
  );
}

export default App;
