import React from "react";

export default function Support() {
  return (
    <>
      <section className="section">
        <div className="container bring-to-front">
          <div className="row gap-y">
            <div className="col-md-6">
              <div className="rounded media bg-contrast shadow-lg p-4">
                <div className="icon-shape mr-4">
                  <i className="pe pe-7s-cash pe-3x" />
                </div>
                <div className="media-body">
                  <h4 className="text-primary">Contact Sales</h4>
                  <a
                    href="mailto:support@5studios.net"
                    className="more-link d-flex align-items-center mt-0"
                  >
                    sales@5studios.net
                  </a>
                  <p className="mt-4">
                    Looking for a custom quote? Need to tell us more about your
                    project? Want a demonstration? Drop us a line
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rounded media bg-contrast shadow-lg p-4">
                <div className="icon-shape mr-4">
                  <i className="pe pe-7s-help2 pe-3x" />
                </div>
                <div className="media-body">
                  <h4 className="text-primary">Technical Support</h4>
                  <a
                    href="mailto:support@5studios.net"
                    className="more-link d-flex align-items-center mt-0"
                  >
                    support@5studios.net
                  </a>
                  <p className="mt-4">
                    Any question about how to integrate your product?. Don't
                    fret, our geek team is ready for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
