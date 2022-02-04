import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
  <main>
    <header className="header alter2-header section" id="home">
      <div className="shapes-container">
        {/* diagonal shapes */}
        <div
          className="shape shape-animated"
          data-aos="fade-down-right"
          data-aos-duration={1500}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-down"
          data-aos-duration={1000}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up-left"
          data-aos-duration={500}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up-right"
          data-aos-duration={1000}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-down-left"
          data-aos-duration={1000}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="fade-down-left"
          data-aos-duration={1000}
          data-aos-delay={100}
        />
        <div
          className="shape shape-animated"
          data-aos="zoom-in"
          data-aos-duration={1000}
          data-aos-delay={300}
        />
        {/* animated shapes */}
        <div className="animation-shape shape-ring animation--clockwise" />
        <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
        <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
        <div className="animation-shape shape-heart animation--clockwise">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-triangle animation--rotating-diagonal">
          <div className="animation--rotating" />
        </div>
        <div className="animation-shape shape-diamond animation--anti-clockwise">
          <div className="animation--rotating" />
        </div>
        {/* static shapes */}
        <div className="static-shape shape-ring-1" />
        <div className="static-shape shape-ring-2" />
        <div className="static-shape shape-circle shape-circle-1">
          <div data-aos="fade-down-left" />
        </div>
        <div className="static-shape shape-circle shape-circle-2">
          <div data-aos="fade-down-left" data-aos-delay={500} />
        </div>
        <div className="static-shape pattern-dots-1" />
        <div className="static-shape pattern-dots-2" />
        {/* main shape */}
        <div className="static-shape background-shape-main" />
        {/* ghost shapes */}
        <div className="static-shape ghost-shape ghost-shape-1" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="rounded-pill shadow-box bg-contrast text-dark bold py-2 px-4">
              <i className="far fa-lightbulb text-primary mr-2" />
              <span className="text-primary">Awesome</span> Landing Page
            </span>
            <h1 className="display-4 display-md-2 mt-3">
              <span className="bold">Quiz Banao</span>
            </h1>
            <p className="lead bold text-primary">
              Premium Startup &amp;
              <span className="head-line-2">App Landing Page</span>
            </p>
            <p className="lead">
              Besides its beautiful design. Quiz Banao is an incredibly rich core
              framework for you to showcase your App.
            </p>
            <nav className="nav my-5">
              <a
                href="#!"
                className="btn btn-rounded btn-alternate mr-2 mr-md-5"
              >
                Know more <i className="fas fa-long-arrow-alt-right ml-2" />
              </a>
              <a
                href="#demos"
                className="btn btn-rounded btn-outline-alternate scrollto"
              >
                Free trial
              </a>
            </nav>
          </div>
          <div className="col-md-6">
            <div className="iphone front mx-auto">
              <div className="screen shadow-box">
                <img src="img/screens/app/3.png" alt="..." />
              </div>
              <div className="notch" />
            </div>
          </div>
        </div>
      </div>
    </header>

  </main>
  
</>

  );
}

export default App;
