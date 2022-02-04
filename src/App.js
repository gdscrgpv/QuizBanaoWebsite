import AdditionalSections from "./components/AdditionalSections";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <AdditionalSections />
      </main>
      <Footer />
    </>
  );
}

export default App;
