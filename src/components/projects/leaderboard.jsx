export const Leaderboard = () => {
  return (
    <>
      <div
        className="card card-b m-3 p-2 bg-dark text-light border-info d-flex flex-row col-sm-12 col-md-8 col-xl-5"
        data-bs-toggle="modal"
        data-bs-target="#leaderboardModal"
      >
        <div className="py-2 d-flex flex-column gap-4">
          <img
            src="/images/project-imgs/Leaderboard-responsive.JPG"
            alt="picture"
            className="card-img"
            style={{ maxHeight: "10rem", maxWidth: "12rem" }}
          />
          <div
            className="d-flex flex-row gap-2 py-2"
            style={{ fontSize: "smaller" }}
          >
            <span className="badge text-bg-info">HTML</span>
            <span className="badge text-bg-info">CSS</span>
            <span className="badge text-bg-info">JavaScript</span>
          </div>
        </div>
        <div className="py-2 px-4">
          <h1 className="card-title">Leaderboard</h1>
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
            This is a rudimentary leaderboard, created for the weekly project.
            It utilizes webpack, babel compiler, and ES6 syntax with modules.
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="leaderboardModal"
        tabIndex="-1"
        aria-labelledby="leaderboardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border border-light">
            <div className="modal-header">
              <h1 className="modal-title fs-1" id="leaderboardModal Label">
                Leaderboard
              </h1>
            </div>
            <div className="modal-body">
              <img
                src="/images/project-imgs/Leaderboard-desktop.JPG"
                alt="picture"
                className="card-img"
                style={{}}
              />
              <p className="py-4">
                A simple one-page leaderboard, where people can enter their name
                and score, and be displayed if they reached the top 10. The name
                and score inputs have length restrictions so that the inputs
                can't break the display.
              </p>
              <div className="d-flex flex-row justify-content-around">
                <a
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mattgomb.github.io/Leaderboard/dist/"
                  role="button"
                >
                  See Live
                </a>
                <a
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MattGomb/Leaderboard"
                  role="button"
                >
                  {" "}
                  See Source
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
