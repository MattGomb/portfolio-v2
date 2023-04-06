import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
  faAngellist,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="m-3 p-3 d-flex flex-column align-items-center bg-dark text-light">
          <div className="d-flex flex-column align-items-center mb-5">
            <h1>Contact me:</h1>
            <p>
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding, I would
              love to help with it!
            </p>
          </div>
          <div className="row">
            <div className="col">
              <h3>Feel free to get in touch with me through my socials:</h3>
              <div className="d-flex flex-column pt-2">
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        size="xl"
                        className="px-2"
                      />
                      /
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="xl"
                        className="px-2"
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="border border-info btn">+593 99 500 6183</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faAt} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        href="mailto: gombosonline@gmail.com"
                        className="text-light btn border border-info p-2"
                        style={{ textDecoration: "none" }}
                      >
                        gombosonline@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faGithub} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/MattGomb"
                        role="button"
                      >
                        @MattGomb
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/gombos-matyas/"
                        role="button"
                      >
                        My LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faAngellist} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wellfound.com/u/matyas-gombos"
                        role="button"
                      >
                        Wellfound
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/MtysGombos1"
                        role="button"
                      >
                        @MtysGombos1
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faFacebook} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/sentadoh/"
                        role="button"
                      >
                        @sentadoh
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flip-card card border-dark pt-3">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </div>
                    <div className="flip-card-back">
                      <a
                        className="btn border border-info"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/lazyhighorse/"
                        role="button"
                      >
                        @lazyhighorse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Or just send me a message:</h3>
              <form action="https://formspree.io/f/xzbqjlag" method="POST">
                <div className="mb-3">
                  <label htmlFor="nameinput" className="form-label">Name</label>
                  <input type="text" className="form-control" id="nameinput" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailinput" className="form-label">Email</label>
                  <input type="email" className="form-control" id="emailinput" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="textareainput" className="form-label">Your message</label>
                  <textarea className="form-control" id="textareainput" rows="3" placeholder="Leave your message here, and your desired contact method"></textarea>
                </div>
                <button type="submit" className="btn btn-info text-light fw-semibold">Get in touch</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
