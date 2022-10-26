import React from "react";

function AboutUs() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            Learn more about us.
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">Fundraising for the Future</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading">
                  Building an Online Charity Community
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
