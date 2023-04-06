export const BudgetApp = () => {
  return (
    <>
      <div
        className="card card-b m-3 p-2 bg-dark text-light border-info d-flex flex-row col-sm-12 col-md-8 col-xl-5"
        data-bs-toggle="modal"
        data-bs-target="#budgetModal"
      >
        <div className="py-2 d-flex flex-column gap-4">
          <img
            src="/images/project-imgs/rorcap1.JPG"
            alt="picture"
            className="card-img"
            style={{ maxHeight: "10rem", maxWidth: "12rem" }}
          />
          <div
            className="d-flex flex-row gap-2 py-2"
            style={{ fontSize: "smaller" }}
          >
            <span className="badge text-bg-info">Ruby on Rails</span>
            <span className="badge text-bg-info">Bootstrap</span>
            <span className="badge text-bg-info">Render</span>
          </div>
        </div>
        <div className="py-2 px-4">
          <h1 className="card-title">Budget App</h1>
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
            Budget App is a simple fullstack application, created with Ruby on
            Rails, and hosted on Render. There is a register process with
            authentication, and each user can only see their own data.
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="budgetModal"
        tabIndex="-1"
        aria-labelledby="budgetModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border border-light">
            <div className="modal-header">
              <h1 className="modal-title fs-1" id="budgetModalLabel">
                Budget App
              </h1>
            </div>
            <div className="modal-body">
              <img
                src="/images/project-imgs/rorcap3.JPG"
                alt="picture"
                className="card-img"
                style={{}}
              />
              <p className="py-4">
                Budget App is a simple application, where users can register
                themselves, create categories, and record their spending in
                them. For the categories users can upload icons to make the app
                cooler. Users can also delete categories and expenses, but not
                edit them. The total value can also be seen for each category.
                The app is hosted on Render.com, so service is spotty at best.
              </p>
              <div className="d-flex flex-row justify-content-around">
                <a
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://budgetappmatt.onrender.com"
                  role="button"
                >
                  See Live
                </a>
                <a
                  className="btn btn-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MattGomb/budget-app-rails"
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
