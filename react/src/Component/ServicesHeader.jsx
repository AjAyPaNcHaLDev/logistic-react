import React from "react";

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

export default ServicesHeader;
