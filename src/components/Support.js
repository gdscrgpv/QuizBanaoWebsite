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
                  <h4 className="text-primary">Want to Host a Quiz?</h4>
                  <a
                    href="mailto:support@5studios.net"
                    className="more-link d-flex align-items-center mt-0"
                  >
                    hi@quizbanao.com
                  </a>
                  <p className="mt-4">
                  If you wish to host a quiz simply drop us a message we'd be happy to help you out.
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
                  <h4 className="text-primary">Bug Report</h4>
                  <a
                    href="mailto:support@5studios.net"
                    className="more-link d-flex align-items-center mt-0"
                  >
                    support@quizbanao.com
                  </a>
                  <p className="mt-4">
                  Found some unexpected behavior in the app? Do report it to us at the mail above. Thanks :)
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
