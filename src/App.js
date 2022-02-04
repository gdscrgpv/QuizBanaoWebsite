import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
