import React from "react";

const Testimonial = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center pb-2">
          <h6 className="text-primary text-uppercase font-weight-bold">
            Testimonial
          </h6>
          <h1 className="mb-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="position-relative bg-secondary p-4">
            <i
              className="fa fa-3x fa-quote-right text-primary position-absolute"
              style={{ top: -6, right: 0 }}
            ></i>
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid rounded-circle"
                src="/img/testimonial-1.jpg"
                style={{ width: 60, height: 60 }}
                alt=""
              />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                <small>- Profession</small>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              clita lorem. Dolor ipsum sanct clita
            </p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i
              className="fa fa-3x fa-quote-right text-primary position-absolute"
              style={{ top: -6, right: 0 }}
            ></i>
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid rounded-circle"
                src="/img/testimonial-2.jpg"
                style={{ width: 60, height: 60 }}
                alt=""
              />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                <small>- Profession</small>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              clita lorem. Dolor ipsum sanct clita
            </p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i
              className="fa fa-3x fa-quote-right text-primary position-absolute"
              style={{ top: -6, right: 0 }}
            ></i>
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid rounded-circle"
                src="/img/testimonial-3.jpg"
                style={{ width: 60, height: 60 }}
                alt=""
              />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                <small>- Profession</small>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              clita lorem. Dolor ipsum sanct clita
            </p>
          </div>
          <div className="position-relative bg-secondary p-4">
            <i
              className="fa fa-3x fa-quote-right text-primary position-absolute"
              style={{ top: -6, right: 0 }}
            ></i>
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid rounded-circle"
                src="/img/testimonial-4.jpg"
                style={{ width: 60, height: 60 }}
                alt=""
              />
              <div className="ml-3">
                <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                <small>- Profession</small>
              </div>
            </div>
            <p className="m-0">
              Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
              clita lorem. Dolor ipsum sanct clita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
