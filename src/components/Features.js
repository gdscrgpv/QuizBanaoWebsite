import React from "react";

export default function Features() {
  return (
    <>
      <section className="section features-cant-miss" id="knowmore">
        <div className="shapes-container overflow-clear">
          <div className="shape shape-circle shape-circle-1">
            <div data-aos="fade-up-left" />
          </div>
          <div className="shape shape-circle shape-circle-2">
            <div data-aos="fade-up-right" data-aos-delay={200} />
          </div>
          <div className="shape shape-circle shape-circle-3">
            <div data-aos="fade-up-left" data-aos-delay={400} />
          </div>
          <div className="shape shape-circle shape-circle-4">
            <div data-aos="fade-up-left" data-aos-delay={600} />
          </div>
          <div className="shape shape-triangle shape-animated">
            <div className="animation--rotating" />
          </div>
        </div>
        <div className="container">
          <div className="row gap-y">
            <div className="col-md-6 order-md-last">
              <div className="section-heading">
                <i className="fas fa-trophy fa-2x text-danger mb-3" />
                <h2 className="heading-line">Features you can't miss</h2>
              </div>
              <ul className="list-unstyled">
                <li className="media flex-column flex-md-row text-center text-md-left">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-mail pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">Mail Management</h5>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aut autem eum laudantium quas recusandae repellendus
                      voluptate.
                    </p>
                  </div>
                </li>
                <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">Customers Tracking</h5>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aut autem eum laudantium quas recusandae repellendus
                      voluptate.
                    </p>
                  </div>
                </li>
                <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                  <div className="media-body mt-3 mt-md-0">
                    <h5 className="bold mt-0 mb-1">Advanced Reporting</h5>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet aut autem eum laudantium quas recusandae repellendus
                      voluptate.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="bubble bubble-left center-x-md">
                <figure
                  className="rounded overflow-hidden shadow"
                  data-aos="zoom-in"
                >
                  <img
                    src="img/screens/app/pieces/4.png"
                    className="img-responsive"
                    alt=""
                  />
                </figure>
              </div>
              <figure className="bubble bubble-right rounded overflow-hidden shadow">
                <img
                  src="img/screens/app/pieces/5.png"
                  className="img-responsive"
                  alt=""
                  data-aos="fade-left"
                />
              </figure>
              <div className="iphone light">
                <div className="screen shadow-box">
                  <img src="img/screens/app/6.png" alt="..." />
                </div>
                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
