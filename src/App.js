import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Features />
        <Support />
      </main>
      <Footer />
    </>
  );
}

export default App;
