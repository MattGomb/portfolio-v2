"use client";

import { ProfilePic } from "./ProfilePic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngellist,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

export const Welcome = () => {
  return (
    <>
      <section id="welcome" style={{ padding: "8rem 0" }}>
        <div className="row px-2 gx-0">
          <div className="d-flex flex-column col-12 col-md-6 align-items-center">
            <div
              className="card py-3 px-5 bg-dark text-light border-info"
              style={{ height: "fit-content" }}
            >
              <h1 className="display-3">MÁTYÁS GOMBOS</h1>
              <p>
                Fullstack web developer. I can help you build a product, feature
                or website. Look through some of my work and experience! If you
                like what you see and have a project you need help with,
                don&apos;t hesitate to contact me!
              </p>
            </div>
            <Button
            variant="outline-info"
              className="buttonCV gradient-border"
              style={{
                margin: "3rem 0",
                padding: "1.5rem 2rem",
                fontSize: "1.5rem",
              }}
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV
            </Button>
          </div>
          <div className="d-flex justify-content-center col-12 col-md-6">
            <ProfilePic />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center parallax">
          <div className="d-flex flex-column align-items-center pt-5 parallax1b">
            <h1 style={{ fontSize: "3rem" }}>Find Me</h1>
            <div>
              <ul
                className="d-flex flex-row my-5 px-0"
                style={{ listStyle: "none", gap: "3rem" }}
              >
                <li>
                  <a
                    href="https://twitter.com/MtysGombos1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "black", fontSize: "2rem" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gombos-m%C3%A1ty%C3%A1s-28139771/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "black", fontSize: "2rem" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@gombosonline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faMedium}
                      style={{ color: "black", fontSize: "2rem" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MattGomb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "black", fontSize: "2rem" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://angel.co/u/matyas-gombos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faAngellist}
                      style={{ color: "black", fontSize: "2rem" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
