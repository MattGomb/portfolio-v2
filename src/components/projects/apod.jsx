import { Button } from "react-bootstrap";

export const ApodReact = () => {
  return (
    <>
      <div
        className="card card-b m-3 p-2 bg-dark text-light border-info d-flex flex-column flex-md-row col-md-8 col-xl-5 align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#apodModal"
      >
        <div className="py-2 d-flex flex-column gap-4">
          <img
            src="/images/project-imgs/apod-full.JPG"
            alt="picture"
            className="card-img"
            style={{ maxHeight: "10rem", maxWidth: "12rem" }}
          />
          <div
            className="d-flex flex-row gap-2 py-2"
            style={{ fontSize: "smaller" }}
          >
            <span className="badge text-bg-info">CSS</span>
            <span className="badge text-bg-info">ReactJS</span>
            <span className="badge text-bg-info">ReduxJS</span>
          </div>
        </div>
        <div className="py-2 px-4">
          <h1 className="card-title">NASA&apos;s APoD</h1>
          <div>
            <ul
              className="d-flex flex-row gap-4 text-secondary"
              style={{ fontSize: "smaller" }}
            >
              <li>MICROVERSE</li>
              <li>Front-end project</li>
              <li>2022</li>
            </ul>
          </div>
          <p className="card-text">
            SPA based on the APOD public API of the NASA. The user can display
            20 random pictures, filter between them based on the title, and see
            details of each picture.
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="apodModal"
        tabIndex="-1"
        aria-labelledby="apodModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border border-light">
            <div className="modal-header">
              <h1 className="modal-title fs-1" id="apodModalLabel">
              Astronomy Picture of the Day
              </h1>
            </div>
            <div className="modal-body">
              <img
                src="/images/project-imgs/apod-detail.JPG"
                alt="picture"
                className="card-img"
                style={{}}
              />
              <p className="py-4">
                This is a Single-Page Application, where the user can display 10
                random pictures from the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apod.nasa.gov/apod/calendar/allyears.html"
                >
                  APOD database of NASA
                </a>
                . Each picture-card contains a &apos;details&apos;-button, which takes the
                user to the &apos;details&apos;-page, where they can read an explanation
                for the picture, see whom the picture belongs to, and the date
                when the picture was the pic of the day (not when it was taken).
                Moving back the user can browse and see the details of the other
                previously displayed pictures, the collection only refreshes
                into 10 new random pictures, when the user clicks the
                &apos;load/refresh&apos; button.
              </p>
              <div className="d-flex flex-row justify-content-around">
                <Button
                  variant="info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nasa-apod-mattgomb.netlify.app/"
                >
                  See Live
                </Button>
                <Button
                  variant="info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MattGomb/capstone3-react-redux-APOD"
                >
                  See Source
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
