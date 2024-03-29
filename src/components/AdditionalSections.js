import React from 'react';

export default function AdditionalSections() {
  return <>
  
  <section className="section">
      <div className="container py-5 border-bottom">
        <div
          className="swiper-container"
          data-sw-show-items={5}
          data-sw-space-between={30}
          data-sw-autoplay={2500}
          data-sw-loop="true"
        >
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="img/logos/1.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/logos/2.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/logos/3.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/logos/4.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/logos/5.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
            <div className="swiper-slide">
              <img
                src="img/logos/6.png"
                className="img-responsive"
                alt=""
                style={{ maxHeight: 60 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="heading-line">Premium features</h2>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nulla,
            voluptates. Architecto eum minima necessitatibus quo reiciendis!
            Aliquam culpa doloremque eaque esse illo, nemo nesciunt nobis quia
            sapiente tenetur veniam.
          </p>
        </div>
        <div className="row gap-y text-center text-md-left">
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-diamond pe-3x mb-3 text-primary" />
            <h5 className="bold">Powerful Design</h5>
            <p className="">
              Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum
              earum error et, exercitationem
            </p>
          </div>
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-tools pe-3x mb-3 text-primary" />
            <h5 className="bold">Professional Tools</h5>
            <p className="">
              Blanditiis cumque, eius error est et exercitationem, explicabo hic
              natus nobis odit porro quia
            </p>
          </div>
          <div className="col-md-4 py-4 rounded shadow-hover">
            <i className="pe pe-7s-light pe-3x mb-3 text-primary" />
            <h5 className="bold">Creative Content</h5>
            <p className="">
              A animi aperiam cupiditate eum incidunt, magni mollitia nam nemo
              non officia omnis, quasi quisquam
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section powered-design" id="product">
      <div className="shapes-container">
        <div className="shape shape-circle shape-circle-1">
          <div data-aos="fade-up-left" data-aos-duration={1500} />
        </div>
        <div className="shape shape-circle shape-circle-2">
          <div
            data-aos="fade-up-left"
            data-aos-duration={1200}
            data-aos-delay={500}
          />
        </div>
        <div className="shape shape-ring animation--rotating-diagonal">
          <div />
        </div>
        <div className="shape shape-triangle shape-animated">
          <div className="animation--rotating" />
        </div>
        <div className="shape pattern-dots-1" />
      </div>
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-md-6">
            <div className="section-heading">
              <h2 className="heading-line">
                Powered with multiple design blocks
              </h2>
              <p className="lead text-muted">
                Unlock the power of Web Design. Quiz Banao comes with multiple
                reusable code blocks you can use to build awesome web pages.
              </p>
            </div>
            <a href="#!" className="btn btn-outline-alternate more-link mt-0">
              Now is the time
            </a>
          </div>
          <div className="col-md-6">
            <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast">
              <figure>
                <img
                  src="img/screens/app/pieces/1.png"
                  className="img-responsive"
                  alt=""
                />
              </figure>
            </div>
            <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
              <figure>
                <img
                  src="img/screens/app/pieces/2.png"
                  className="img-responsive"
                  alt=""
                />
              </figure>
            </div>
            <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
              <figure>
                <img
                  src="img/screens/app/pieces/3.png"
                  className="img-responsive"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section className="section pricing-plans" id="pricing">
      <div className="shapes-container overflow-clear">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <i className="icon pe pe-7s-cash pe-3x" data-aos="fade-down" />
        <i className="icon fas fa-dollar-sign fa-3x" data-aos="fade-up" />
        <i className="icon pe pe-7s-piggy pe-3x" data-aos="fade-up" />
        <i className="icon pe pe-7s-cart pe-3x" data-aos="fade-left" />
        <i className="icon far fa-credit-card fa-3x" data-aos="fade-down" />
        <i className="icon far fa-money-bill-alt fa-3x" data-aos="fade-up" />
      </div>
      <div className="container">
        <div className="section-heading text-center">
          <span className="rounded-pill shadow-box bold py-2 px-4">
            <i className="far fa-lightbulb text-primary mr-2" />
            <span className="text-primary">Save more</span> with these awesome
            plans
          </span>
          <h2 className="mt-3 heading-line">Transparent pricing</h2>
          <p className="lead text-muted">
            Our plans have everything you need to take your app to the next
            level. <span className="highlight">No hidden fees.</span>
          </p>
          <div
            id="pricing-basis-options"
            className="btn-group btn-group-toggle mt-5"
            data-toggle="buttons"
          >
            <label className="btn btn-secondary active">
              <input
                type="radio"
                name="pricing-basis"
                defaultValue="monthly"
                defaultChecked="checked"
              />
              Monthly
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="pricing-basis" defaultValue="yearly" />
              Yearly
            </label>
          </div>
        </div>
        <div className="row no-gutters align-items-center pricing-plans-options">
          <div className="col-lg-4 pricing-plan plan-basic order-md-first">
            <div className="p-5">
              <div className="text-center">
                <h4 className="text-alternate bold text-capitalize">basic</h4>
                <p>For individuals</p>
                <div className="pricing-details">
                  <span className="pricing-value">
                    <span
                      className="odometer price"
                      data-monthly={0}
                      data-yearly={0}
                    >
                      0
                    </span>
                  </span>
                </div>
                <a
                  href="#!"
                  className="more-link btn btn-outline-alternate mb-3"
                >
                  I want this
                </a>
              </div>
              <hr />
              <div className="d-none d-md-flex">
                <ul className="list-group list-group-flush list-group-no-border">
                  <li className="list-group-item">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="list-group-item">Dicta doloremque</li>
                  <li className="list-group-item">
                    Consectetur fuga inventore
                  </li>
                  <li className="list-group-item">
                    Alias animi, assumenda atque
                  </li>
                  <li className="list-group-item">
                    Accusamus adipisci aspernatur
                  </li>
                </ul>
              </div>
              <div className="d-md-none">
                <button
                  type="button"
                  className="more-link btn btn-link d-flex align-items-center mx-auto"
                  data-toggle="modal"
                  data-target="#basic-plan-modal-basic"
                >
                  View plan details
                </button>
                <div className="modal" id="basic-plan-modal-basic">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title bold text-capitalize">
                          basic plan
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body plan-features">
                        <ul className="list-group list-group-flush text-center">
                          <li className="list-group-item border-top-0">
                            Lorem ipsum dolor sit amet
                          </li>
                          <li className="list-group-item">Dicta doloremque</li>
                          <li className="list-group-item">
                            Consectetur fuga inventore
                          </li>
                          <li className="list-group-item">
                            Alias animi, assumenda atque
                          </li>
                          <li className="list-group-item">
                            Accusamus adipisci aspernatur
                          </li>
                          <li className="list-group-item">
                            Delectus earum iste nobis
                          </li>
                          <li className="list-group-item">
                            Accusamus alias amet at
                          </li>
                          <li className="list-group-item">
                            Accusamus alias aliquid
                          </li>
                          <li className="list-group-item">
                            Animi blanditiis eveniet
                          </li>
                          <li className="list-group-item">
                            Ab aliquid amet consequatur
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pricing-plan plan-enterprise order-md-last">
            <div className="p-5">
              <div className="text-center">
                <h4 className="text-alternate bold text-capitalize">
                  enterprise
                </h4>
                <p>For large companies</p>
                <div className="pricing-details">
                  <span className="pricing-value">
                    <span
                      className="odometer price"
                      data-monthly="19.99"
                      data-yearly="14.99"
                    >
                      19.99
                    </span>
                  </span>
                </div>
                <a
                  href="#!"
                  className="more-link btn btn-outline-alternate mb-3"
                >
                  I want this
                </a>
              </div>
              <hr />
              <div className="d-none d-md-flex">
                <ul className="list-group list-group-flush list-group-no-border">
                  <li className="list-group-item">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="list-group-item">Dicta doloremque</li>
                  <li className="list-group-item">
                    Consectetur fuga inventore
                  </li>
                  <li className="list-group-item">
                    Alias animi, assumenda atque
                  </li>
                  <li className="list-group-item">
                    Accusamus adipisci aspernatur
                  </li>
                </ul>
              </div>
              <div className="d-md-none">
                <button
                  type="button"
                  className="more-link btn btn-link d-flex align-items-center mx-auto"
                  data-toggle="modal"
                  data-target="#basic-plan-modal-enterprise"
                >
                  View plan details
                </button>
                <div className="modal" id="basic-plan-modal-enterprise">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title bold text-capitalize">
                          enterprise plan
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body plan-features">
                        <ul className="list-group list-group-flush text-center">
                          <li className="list-group-item border-top-0">
                            Lorem ipsum dolor sit amet
                          </li>
                          <li className="list-group-item">Dicta doloremque</li>
                          <li className="list-group-item">
                            Consectetur fuga inventore
                          </li>
                          <li className="list-group-item">
                            Alias animi, assumenda atque
                          </li>
                          <li className="list-group-item">
                            Accusamus adipisci aspernatur
                          </li>
                          <li className="list-group-item">
                            Delectus earum iste nobis
                          </li>
                          <li className="list-group-item">
                            Accusamus alias amet at
                          </li>
                          <li className="list-group-item">
                            Accusamus alias aliquid
                          </li>
                          <li className="list-group-item">
                            Animi blanditiis eveniet
                          </li>
                          <li className="list-group-item">
                            Ab aliquid amet consequatur
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pricing-plan plan-business best-value">
            <div className="p-5 py-md-6">
              <div className="text-center">
                <h4 className="text-primary bold text-capitalize">business</h4>
                <p>For small business</p>
                <div className="pricing-details">
                  <span className="pricing-value">
                    <span
                      className="odometer price"
                      data-monthly="49.99"
                      data-yearly="39.99"
                    >
                      49.99
                    </span>
                  </span>
                </div>
                <a href="#!" className="more-link btn btn-alternate mb-3">
                  I want this
                </a>
              </div>
              <hr />
              <div className="d-none d-md-flex">
                <ul className="list-group list-group-flush list-group-no-border">
                  <li className="list-group-item">
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="list-group-item">Dicta doloremque</li>
                  <li className="list-group-item">
                    Consectetur fuga inventore
                  </li>
                  <li className="list-group-item">
                    Alias animi, assumenda atque
                  </li>
                  <li className="list-group-item">
                    Accusamus adipisci aspernatur
                  </li>
                </ul>
              </div>
              <div className="d-md-none">
                <button
                  type="button"
                  className="more-link btn btn-link d-flex align-items-center mx-auto"
                  data-toggle="modal"
                  data-target="#basic-plan-modal-business"
                >
                  View plan details
                </button>
                <div className="modal" id="basic-plan-modal-business">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title bold text-capitalize">
                          business plan
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body plan-features">
                        <ul className="list-group list-group-flush text-center">
                          <li className="list-group-item border-top-0">
                            Lorem ipsum dolor sit amet
                          </li>
                          <li className="list-group-item">Dicta doloremque</li>
                          <li className="list-group-item">
                            Consectetur fuga inventore
                          </li>
                          <li className="list-group-item">
                            Alias animi, assumenda atque
                          </li>
                          <li className="list-group-item">
                            Accusamus adipisci aspernatur
                          </li>
                          <li className="list-group-item">
                            Delectus earum iste nobis
                          </li>
                          <li className="list-group-item">
                            Accusamus alias amet at
                          </li>
                          <li className="list-group-item">
                            Accusamus alias aliquid
                          </li>
                          <li className="list-group-item">
                            Animi blanditiis eveniet
                          </li>
                          <li className="list-group-item">
                            Ab aliquid amet consequatur
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-0 border-bottom">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="text-center text-md-left">
              <h4 className="bold accent">Not sure what's better for you?</h4>
              <p className="mt-0">
                You can start for free, as long as you fell in love with our App
                you can decide what plan better suites your needs.
                <span className="italic dotted">
                  By picking any of the pay plans you'll get 30 days free trial.
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-right">
            <a
              href="#!"
              className="btn btn-primary btn-lg text-contrast p-4 more-link ml-md-auto"
            >
              Try it now !
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section integration-bubbles">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-md-6">
            <div className="bubbles-wrapper">
              <div className="animations m-0">
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="img/demo/header/apx.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Autoprefixer
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="img/demo/header/bs.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Bootstrap
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="img/demo/header/cordova.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Cordova
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="img/demo/header/css.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">CSS</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="img/demo/header/fa.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Fontawesome
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="img/demo/header/html.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">HTML</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="img/demo/header/js.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Javascript
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="img/demo/header/npm.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">Npm</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="img/demo/header/sass.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">SASS</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="img/demo/header/apx.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Autoprefixer
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="img/demo/header/bs.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Bootstrap
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="img/demo/header/cordova.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Cordova
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="img/demo/header/css.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">CSS</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="img/demo/header/fa.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Fontawesome
                  </span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="img/demo/header/html.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">HTML</span>
                </div>
                <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="img/demo/header/js.svg"
                    alt=""
                    className="img-responsive"
                  />
                  <span className="badge badge-contrast shadow-box">
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-heading">
              <p className="text-alternate text-uppercase bold">
                Extending core
              </p>
              <h2 className="heading-line">Integrations to make it better</h2>
              <p className="lead text-muted">
                Ever wonder about the wonder of Laap: We count on hundreds of
                friends contributing day by day to make Quiz Banao a wonderful tool
              </p>
            </div>
            <a href="#!" className="more-link">
              Explore all integration
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section why-choose-us">
      <div className="shapes-container">
        <div className="pattern pattern-dots" />
      </div>
      <div className="container pb-8 bring-to-front">
        <div className="section-heading text-center">
          <h2 className="heading-line">Why you should choose Laap?</h2>
          <p className="text-muted lead mx-auto">
            Quiz Banao is designed to provide you with the last trends in web design.
            It'll help you to focus on your product, launch your website faster
            and reach more customer.
          </p>
        </div>
        <div className="row gap-y">
          <div className="col-md-6">
            <h4 className="bold text-alternate">
              It all start by choosing the right tools
            </h4>
            <p className="text-muted lead mb-5">
              When you're looking for a template you want it to stand-out. Quiz Banao
              comes with many customizable components.
            </p>
            <ul className="list-unstyled why-icon-list">
              <li className="list-item">
                <div className="media align-items-center">
                  <div className="icon-shape mr-3">
                    <div className="shape shape-pipes" />
                    <i className="icon text-alternate fas fa-plug fa-3x" />
                  </div>
                  <div className="media-body">
                    <h5 className="bold">Integrations</h5>
                    <p className="my-0">
                      Aut debitis deserunt ea explicabo hic id incidunt, minus
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <div className="media align-items-center">
                  <div className="icon-shape mr-3">
                    <div className="shape shape-pipes" />
                    <i className="icon text-alternate fas fa-heart fa-3x" />
                  </div>
                  <div className="media-body">
                    <h5 className="bold">Marketing</h5>
                    <p className="my-0">
                      Aliquam amet assumenda debitis dicta distinctio eaque enim
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <div className="media align-items-center">
                  <div className="icon-shape mr-3">
                    <div className="shape shape-pipes" />
                    <i className="icon text-alternate fas fa-headphones fa-3x" />
                  </div>
                  <div className="media-body">
                    <h5 className="bold">Support</h5>
                    <p className="my-0">
                      Consequatur doloremque illum libero nam. Hic, vitae?
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <hr className="my-5" />
            <div className="text-center text-md-left">
              <a href="#!" className="btn btn-primary text-contrast">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rotated-mockups device-twin">
              <div className="browser absolute shadow-lg">
                <img src="img/screens/tablet/1.png" alt="..." />
              </div>
              <div className="front iphone light">
                <div className="screen">
                  <img src="img/screens/app/1.png" alt="..." />
                </div>
                <div className="notch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section faqs-dd bg-light edge top-left">
      <div className="shapes-container">
        <div className="absolute icon" data-aos="fade-down-left">
          <i className="fas fa-question" />
        </div>
      </div>
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="heading-line">Frequently Asked Questions</h2>
          <p className="lead">Want to know more about our services?</p>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-lg-auto">
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q1"
                  >
                    What does the package include?
                  </a>
                </div>
                <div id="v1-q1" className="collapse card-body">
                  When you buy Dashcore, you get all you see in the demo but the
                  images. We include SASS files for styling, complete JS files
                  with comments, all HTML variations. Besides we include all
                  mobile PSD mockups.
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q2"
                  >
                    What is the typical response time for a support question?
                  </a>
                </div>
                <div id="v1-q2" className="collapse card-body">
                  Since you report us a support question we try to make our best
                  to find out what is going on, depending on the case it could
                  take more or les time, however a standard time could be
                  minutes or hours.
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q3"
                  >
                    What do I need to know to customize this template?
                  </a>
                </div>
                <div id="v1-q3" className="collapse card-body">
                  Our documentation give you all you need to customize your
                  copy. However you will need some basic web design knowledge
                  (HTML, Javascript and CSS)
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="card shadow-box shadow-hover mb-3">
                <div className="card-header py-3">
                  <a
                    href="#"
                    className="card-title collapsed"
                    data-toggle="collapse"
                    data-target="#v1-q4"
                  >
                    Can I suggest a new feature?
                  </a>
                </div>
                <div id="v1-q4" className="collapse card-body">
                  Definitely <span className="bold">Yes</span>, you can contact
                  us to let us know your needs. If your suggestion represents
                  any value to both we can include it as a part of the theme or
                  you can request a custom build by an extra cost. Please note
                  it could take some time in order for the feature to be
                  implemented.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section start-free" id="trial">
      <div className="shapes-container">
        <i className="icon pe pe-7s-hourglass pe-3x" />
        <i className="icon pe pe-7s-magic-wand pe-3x" />
        <i className="icon pe pe-7s-rocket pe-3x" />
        <i className="icon pe pe-7s-plugin pe-3x" />
        <i className="icon pe pe-7s-like pe-3x" />
        <i className="icon pe pe-7s-clock pe-3x" />
        <i className="icon pe pe-7s-smile pe-3x" />
        <i className="icon pe pe-7s-piggy pe-3x" />
        <i className="icon pe pe-7s-shield pe-3x" />
        <i className="icon pe pe-7s-server pe-3x" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="section-heading text-center">
              <i className="pe pe-7s-unlock fa-3x text-alternate" />
              <h2 className="heading-line bold mt-4">
                Start your 15 days free trial now!
              </h2>
              <p className="lead text-muted">
                By signing up you will get 15 days free trial. You won't be
                charged until the trial period ends,
                <span className="italic">
                  don't let this offer pass in from of your eyes
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="nav flex-column flex-md-row align-items-center justify-content-center">
          <a
            href="#!"
            className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0"
          >
            Sign up
          </a>
          <a
            href="mailto:support@5studios.net"
            className="btn btn-outline-dark btn-lg py-3 px-4 bold"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>

  </>;
}
