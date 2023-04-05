
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark px-2">
        <a className="navbar-brand px-2" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'end' }}>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Welcome</a>
            <a className="nav-item nav-link" href="#">Projects</a>
            <a className="nav-item nav-link" href="#">Recommendations</a>
            <a className="nav-item nav-link" href="#">About Me</a>
            <a className="nav-item nav-link" href="#">Contact Me</a>
          </div>
        </div>
      </nav>
    </>
  )
}