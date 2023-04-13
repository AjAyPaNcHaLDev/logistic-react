import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-primary mb-4">Safe & Faster</h1>
          <h1 className="text-white display-3 mb-5">Logistics Services</h1>
          <div className="mx-auto" style={{ width: "100%", maxWidth: 600 }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: 30 }}
                placeholder="Tracking Id"
              />
              <div className="input-group-append">
                <button className="btn btn-primary px-3">Track & Trace</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const AboutHeader = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">About</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="#">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">About</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const ServicesHeader = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Service</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="#">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">About</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const PriceHeader = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Price</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="#">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Price</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const ContactHeader = () => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Contact</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="#">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Contact</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export { AboutHeader, ContactHeader, ServicesHeader, PriceHeader };
export default Header;
