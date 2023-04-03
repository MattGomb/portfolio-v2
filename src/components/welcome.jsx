import { ProfilePic } from "./ProfilePic";

export const Welcome = () => {
  return ( 
    <>
      <div className="welcome card m-3 p-3 d-flex flex-row align-items-center">
        <div>
          <div>
            <h1>I'm Mátyás glad to see you!</h1>
          </div>
          <div>
            <p>I’m a software developer! I can help you build a product  feature or website. 
              Look through some of my work and experience!
              If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
          </div>
          <div>
            <span>LET'S CONNECT</span>
          </div>
          <div>
            <ul>
              <li><a href="https://twitter.com/MtysGombos1"><img src="./images/twitter.svg"
                alt="twitter icon" /></a></li>
              <li><a href="https://www.linkedin.com/in/gombos-m%C3%A1ty%C3%A1s-28139771/"><img
                src="./images/Linkedinicon.svg" alt="linkedin icon" /></a></li>
              <li><a href="https://medium.com/@gombosonline"><img src="./images/medium.svg" alt="medium icon" /></a></li>
              <li><a href="https://github.com/MattGomb"><img src="./images/github.svg"
                alt="github icon" /></a></li>
              <li><a href="https://angel.co/u/matyas-gombos"><img src="./images/angelly.svg"
                alt="angellist icon" /></a></li>
            </ul>
          </div>
        </div>
        <ProfilePic />
      </div>
    </>
  );
};
