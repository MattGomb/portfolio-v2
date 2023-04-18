import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
  faAngellist,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="d-flex flex-column justify-content-center"
      >
        <div className="m-3 p-3 d-flex flex-column align-items-center bg-dark text-light">
          <div className="d-flex flex-column align-items-center mb-5">
            <h1 className="my-5">Contact me:</h1>
            <p className="col-sm-10 col-md-8 col-lg-6">
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding, I
              would love to help with it!
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Feel free to get in touch with me through my socials:</h3>
              <div className="d-flex flex-column pt-2">
                <div className="pt-3 ">
                  <p className="btn contact-btn btn-outline-info p-3 m-0">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      size="xl"
                      className="pe-2"
                    />
                    /
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="xl"
                      className="px-2"
                    />
                    +593 99 500 6183
                  </p>
                </div>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  href="mailto: gombosonline@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faAt} size="xl" className="pe-2" />
                  gombosonline@gmail.com
                </Button>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  href="https://github.com/MattGomb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" className="pe-2" />
                  @MattGomb
                </Button>
                <Button
                  variant="outline-info"
                  className="contact-btn p-3 mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/gombos-matyas/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="pe-2"
                  />
                  My LinkedIn
                </Button>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wellfound.com/u/matyas-gombos"
                >
                  <FontAwesomeIcon
                    icon={faAngellist}
                    size="xl"
                    className="pe-2"
                  />
                  Wellfound
                </Button>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/MtysGombos1"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className="pe-2"
                  />
                  @MtysGombos1
                </Button>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sentadoh/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="xl"
                    className="pe-2"
                  />
                  @sentadoh
                </Button>
                <Button
                  variant="outline-info"
                  className="mt-3 contact-btn p-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/lazyhighorse/"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="pe-2"
                  />
                  @lazyhighorse
                </Button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="mb-5 msg">Or just send me a message:</h3>
              <form action="https://formspree.io/f/xzbqjlag" method="POST">
                <div className="mb-3">
                  <label htmlFor="nameinput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameinput"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailinput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailinput"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="textareainput" className="form-label">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="textareainput"
                    rows="3"
                    placeholder="Leave your message here, and your desired contact method"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  variant="info"
                  className="text-light fw-semibold"
                >
                  Get in touch
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
