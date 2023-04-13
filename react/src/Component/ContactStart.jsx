import React from "react";

export const ContactStart = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <div className="bg-primary text-dark text-center p-4">
                <h4 className="m-0">
                  <i className="fa fa-map-marker-alt text-white mr-2"></i>123
                  Street, New York, USA
                </h4>
              </div>
              {/* <iframe
                style={{ width: "100%", height: 470, border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe> */}
              <iframe
                style={{ width: "100%", height: 470, border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6957.202157429758!2d76.30120104602128!3d29.323375278250975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391204e55da44fd1%3A0xa70a8174f741dc5!2sBhavishya%20Sainik%20Academy%20Jind!5e0!3m2!1sen!2sin!4v1680950520137!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-7">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Contact Us
              </h6>
              <h1 className="mb-4">Contact For Any Queries</h1>
              <div
                className="contact-form bg-secondary"
                style={{ padding: 30 }}
              >
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control border-0 py-3 px-4"
                      rows="3"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
