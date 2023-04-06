
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark px-2">
        <a className="navbar-brand px-2" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'end' }}>
          <div className="navbar-nav me-3">
            <a className="nav-item nav-link link1 my-2 me-2" href="#welcome">Welcome</a>
            <a className="nav-item nav-link link2 my-2 me-2" href="#projects">Projects</a>
            <a className="nav-item nav-link link3 my-2 me-2" href="#recommendations">Recommendations</a>
            <a className="nav-item nav-link link4 my-2 me-2" href="#about">About Me</a>
            <a className="nav-item nav-link link5 my-2 me-2" href="#contact">Contact Me</a>
          </div>
        </div>
      </nav>
    </>
  )
}