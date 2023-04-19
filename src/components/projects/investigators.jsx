import { Button } from "react-bootstrap";

export const Investigators = () => {
  return (
    <>
      <div
        className="card card-b m-3 p-2 bg-dark text-light border-info d-flex flex-row col-12 col-md-8 col-xl-5"
        data-bs-toggle="modal"
        data-bs-target="#inviModal"
      >
        <div className="py-2 d-flex flex-column gap-4">
          <img
            src="/images/project-imgs/pis-full.JPG"
            alt="picture"
            className="card-img"
            style={{ maxHeight: "10rem", maxWidth: "12rem" }}
          />
          <div
            className="d-flex flex-row gap-2 py-2"
            style={{ fontSize: "smaller" }}
          >
            <span className="badge text-bg-info">ReactJS</span>
            <span className="badge text-bg-info">Ruby on Rails</span>
            <span className="badge text-bg-info">Bootstrap</span>
          </div>
        </div>
        <div className="py-2 px-4">
          <h1 className="card-title">Book a P.I.</h1>
          <div>
            <ul
              className="d-flex flex-row gap-4 text-secondary"
              style={{ fontSize: "smaller" }}
            >
              <li>MICROVERSE</li>
              <li>Full-stack project</li>
              <li>2023</li>
            </ul>
          </div>
          <p className="card-text">
            This is the final capstone project for the Microverse program,
            created with React and Ruby on Rails. The app is not hosted, to run
            it locally, please follow instructions from the linked GitHub
            repositories.
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="inviModal"
        tabIndex="-1"
        aria-labelledby="inviModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border border-light">
            <div className="modal-header">
              <h1 className="modal-title fs-1" id="inviModalLabel">
                Book a Private Investigator
              </h1>
            </div>
            <div className="modal-body">
              <img
                src="/images/project-imgs/pis-detail.JPG"
                alt="picture"
                className="card-img"
                style={{}}
              />
              <p className="py-4">
                Private Investigators is the ultimate solution for booking
                appointments with professional investigators. Our React app is
                designed to make the process of finding and booking an
                investigator as easy and seamless as possible. With a
                user-friendly interface and intuitive design, Private
                Investigators is the perfect tool for anyone in need of
                investigative services. Whether you&apos;re looking to investigate a
                business partner, or simply need help with a personal matter,
                Private Investigators has got you covered. Try it out today and
                experience the power of our cutting-edge React app.
              </p>
              <div className="d-flex flex-row justify-content-around">
                <Button
                  variant="info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MattGomb/final-capstone-frontend"
                >
                  See the Frontend
                </Button>
                <Button
                  variant="info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MattGomb/final-capstone-backend"
                >
                  See the Backend
                </Button>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                variant="danger"
                data-bs-dismiss="modal"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
