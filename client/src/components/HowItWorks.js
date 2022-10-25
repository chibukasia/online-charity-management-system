import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="page-section" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">How It Works</h2>
        </div>

        <div className="section-container">
          <div className="section-container-card">
            <span className="fa-stack fa-4x">
              <FaIcons.FaMarker />
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Sign Up</h4>
            <p className="text-muted">
              Get our services by registering as a donor or an NGO. As a donor,
              register to donate to different charity organizations seeking
              donations. As an NGO, register to request donations
            </p>
          </div>
          <div className="section-container-card">
            <span className="fa-stack fa-4x">
              <FaIcons.FaDonate />
              <i class="fa fa-user-plus" aria-hidden="true"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Donate</h4>
            <p className="text-muted">
              If you have registered as a donor, you can visit your homepage to
              view all the possible donaton requests from different
              organizations and donate to help change a life. You can donate to
              different NGOs with any amount of money
            </p>
          </div>
          <div className="section-container-card">
            <span className="fa-stack fa-4x">
              <FaIcons.FaRegRegistered />
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <h4 className="my-3">Seek Donation</h4>
            <p className="text-muted">
              For an NGO seeking for donations you will be redirected to
              the an NGO registration page where you will register your NGO by filling in the
              details and wait for approval from the admin. After approval you
              can now fill a donatio request form and wait for approval
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
