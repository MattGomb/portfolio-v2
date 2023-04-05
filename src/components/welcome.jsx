import { ProfilePic } from "./ProfilePic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Welcome = () => {
  return (
    <>
      <section className="height" style={{padding: '10rem 5rem'}}>
        <div className="d-flex flex-row justify-content-around">
          <div className="card p-5 align-items-center bg-dark text-light border-info w-50">
                <h1>I'm Mátyás, glad to see you!</h1>
                <p>I’m a software developer! I can help you build a product  feature or website.
                  Look through some of my work and experience!
                  If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
          </div>
          <div>
            <ProfilePic />
          </div>
        </div>
        <div className="bg-dark text-light d-flex flex-column align-items-center" style={{padding: "8rem 0"}}>
          <h1 style={{fontSize: "3rem"}}>Find Me</h1>
          <div>
            <ul className="d-flex flex-row my-5 px-0" style={{ listStyle: 'none', gap: '3rem' }}>
              <li><a href="https://twitter.com/MtysGombos1"><FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '2rem' }} /></a></li>
              <li><a href="https://www.linkedin.com/in/gombos-m%C3%A1ty%C3%A1s-28139771/"><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', fontSize: '2rem' }} /></a></li>
              <li><a href="https://medium.com/@gombosonline"><FontAwesomeIcon icon={faMedium} style={{ color: 'white', fontSize: '2rem' }} /></a></li>
              <li><a href="https://github.com/MattGomb"><FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '2rem' }} /></a></li>
              <li><a href="https://angel.co/u/matyas-gombos"><FontAwesomeIcon icon={faAngellist} style={{ color: 'white', fontSize: '2rem' }} /></a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
