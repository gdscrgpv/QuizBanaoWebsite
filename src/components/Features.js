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
              <ul class="list-unstyled">
                <li class="media flex-column flex-md-row text-center text-md-left">
                  <i class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-mail pe-3x"></i>
                  <div class="media-body mt-3 mt-md-0">
                    <h5 class="bold mt-0 mb-1">Live Quizzes</h5>
                    <p class="m-0">
                      On our platform you can host live quizzes for your
                      events/webinars
                    </p>
                  </div>
                </li>
                <li class="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x"></i>
                  <div class="media-body mt-3 mt-md-0">
                    <h5 class="bold mt-0 mb-1">Awesome leaderboard</h5>
                    <p class="m-0">
                      Users can track quizzes with an awesome real time
                      leaderboard
                    </p>
                  </div>
                </li>
                <li class="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x"></i>
                  <div class="media-body mt-3 mt-md-0">
                    <h5 class="bold mt-0 mb-1">Detailed tracking</h5>
                    <p class="m-0">
                      Track how much time a candidate spent on a particular
                      question and get data to asses the candidates strengths
                      and weaknesses
                    </p>
                  </div>
                </li>
                <li class="media flex-column flex-md-row text-center text-md-left mt-4">
                  <i class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x"></i>
                  <div class="media-body mt-3 mt-md-0">
                    <h5 class="bold mt-0 mb-1">Easy management</h5>
                    <p class="m-0">
                      Create and manage quizzes with our multi functionality
                      admin panel.
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
