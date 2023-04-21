import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const Recommendations = () => {
  return (
    <>
      <section
        id="recommendations"
        className="d-flex flex-column justify-content-center py-5"
      >
        <h1 className="text-light text-center py-4">Recommendations:</h1>
        <Carousel
          fade
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            minHeight: "26rem",
          }}
        >
          <Carousel.Item>
            <div>
              <h2>Felipe Oyarzo Contreras</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jorge-felipe-oyarzo-contreras/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;I had the opportunity to work with Mátyás many times
                toward the end of the Microverse technical curriculum,and every
                time he showed great determination and skills as a developer. He
                has excellent leadership skills, is very open to learning, and
                always aims to deliver a high-quality final product. I am
                positive that he would be a great addition to any team.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Alexandre Medina</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alexmedinasf/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;I met Matt during the first weeks of Microverse, and I can
                say that he is one of the most talented and brilliant people
                that I have ever come across during the course, helping me and
                our colleagues whenever we needed it. He is extremely
                intelligent, knows how to work very well in a team and above
                all, he is very kind and hardworking. I&apos;m sure he&apos;ll
                be a great addition to any team lucky enough to have him.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Marco Vinicio Oquendo</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/marcooquendoc/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;Mátyás is a hardworking, intelligent, and teamwork
                professional. He has a unique eye to see details and a fast
                brain for analyzing problems. I can see his amazingly positive
                attitude and bigheartedness for others. I am confident that
                Mátyás Gombos would be a great fit for any tech company.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Marcos Gualtero Lourenzo</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/marcosgualtero/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;Matt is a complete programmer. I met him at the Microverse
                Program and we made a couple of projects together, in which he
                work clearly and perfectly organized, he never lost a meeting,
                and he always did it with a smile on his face, for addition he
                always was there if any partners needed help!&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Amare Kassa</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/amaremek/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;I have known Gombos Matyas since August 2022, during pair
                programming both at the morning session and collaboration
                sessions of online learning at Microverse. Matyas has taught me
                tolerance, humbleness, punctuality, and respect for his
                teammates. I am also fascinated by his time management that he
                always finishes all the tasks in time. Among the teammates I
                experienced during pair programming at Microverse, I have found
                Matyas my choice to be my life mentor, too. I reach out to him
                whenever I experience confusion or get stuck while doing
                projects.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Jose Zepeda</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jose-zromero/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;Matyas Gombos is a person who is quite focused on his
                tasks and quite good at perceiving minimal details that can go
                unnoticed at the time of coding, he is excellent at expressing
                and sharing opinions, in addition to having good programming
                logic, I highly recommend him and without any exception.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Abubakar Ummar</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abubakar-ummar/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;Gombos Matyas is a logical person. Always open to finding
                solutions to tasks. Always early to meetings and I really loved
                working together with him on multiple projects. He is always
                ready to face tasks head-on and give help when he can. Any
                company that hires Matyas will definitely see his value. I hope
                we get to work together again.&quot;
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <h2>Sunday Ezema</h2>
              <Button
                variant="outline-info"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sunday-anthony-ezema/"
              >
                LinkedIn
              </Button>
              <p>
                &quot;Gombos is an intelligent person and a Teamplayer, studying
                and performing some coding task, made me learn a lot from him. I
                Recommend him for any job role related to his career.&quot;
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};
