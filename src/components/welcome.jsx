import { ProfilePic } from "./ProfilePic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Welcome = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <section id="welcome" style={{padding: '8rem 0'}}>
        <div className="d-flex flex-row justify-content-around">
          <div className="card py-3 px-5 align-items-center bg-dark text-light border-info w-50" style={{height: 'fit-content'}}>
                <h1 className="display-3">MÁTYÁS GOMBOS</h1>
                <p>Fullstack web developer. I can help you build a product, feature or website.
                  Look through some of my work and experience!
                  If you like what you see and have a project you need help with, don’t hestiate to contact me!</p>
          </div>
          <div>
            <ProfilePic />
          </div>
        </div>
        <div className="bg-light text-dark d-flex flex-column align-items-center border-top border-bottom border-warning" style={{ height: '30rem' }}>
          <motion.div style={{ y }}>
            <Image
              src="/images/backgrounds/mountains.png" 
              height={960}
              width={1920}
              alt="profilepic" />
          </motion.div>
          <div style={{ zIndex: '1' }}>
            <h1 style={{fontSize: "3rem"}}>Find Me</h1>
            <div>
              <ul className="d-flex flex-row my-5 px-0" style={{ listStyle: 'none', gap: '3rem' }}>
                <li><a href="https://twitter.com/MtysGombos1"><FontAwesomeIcon icon={faTwitter} style={{ color: 'black', fontSize: '2rem' }} /></a></li>
                <li><a href="https://www.linkedin.com/in/gombos-m%C3%A1ty%C3%A1s-28139771/"><FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', fontSize: '2rem' }} /></a></li>
                <li><a href="https://medium.com/@gombosonline"><FontAwesomeIcon icon={faMedium} style={{ color: 'black', fontSize: '2rem' }} /></a></li>
                <li><a href="https://github.com/MattGomb"><FontAwesomeIcon icon={faGithub} style={{ color: 'black', fontSize: '2rem' }} /></a></li>
                <li><a href="https://angel.co/u/matyas-gombos"><FontAwesomeIcon icon={faAngellist} style={{ color: 'black', fontSize: '2rem' }} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
