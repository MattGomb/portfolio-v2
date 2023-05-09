import Image from "next/image";
export const About = () => {
  return (
    <>
      <section
        id="about"
        className="text-dark d-flex flex-column justify-content-center"
      >
        <div className="py-5 d-flex flex-column parallax2">
          <h1 className="py-3 align-self-center">About me</h1>
          <div className="row justify-content-center gap-3 gx-0">
            <p className="col border border-info border-opacity-25 rounded border-2 py-2 lead col-11 col-md-8 col-xl-5 parallax2b">
              My name is Mátyás Gombos (just call me Matt) and I am a fullstack
              web developer. I started my journey in 2022, with the{" "}
              <a
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.microverse.org/"
              >
                MICROVERSE
              </a>{" "}
              program. I was born in 1991 in Budapest, Hungary, but nowadays I
              live in Ecuador with my wife. I have degrees in Environmental
              Management and Sustainability, but I only found my real passion in
              programming. I love creating simple and beautiful UIs that are
              also enjoyable to use, but I also love implementing savvy
              solutions behind the curtain that make the app run smoothly. In my
              free time I love to watch tv-shows, play boardgames, play the
              guitar, bake, and find new restaurants to try out with my wife.
            </p>
            <div className="col border border-info border-opacity-25 rounded border-2 py-2 col-11 col-md-8 col-xl-5 parallax2b overflow-auto">
              <h3 className="mb-4">My stacks and skills are: </h3>
              <div className="d-flex mb-4 gap-3 align-items-baseline">
                <p>Frontend:</p>
                <div className="d-flex gap-3">
                  {" "}
                  <a
                    href="https://www.w3schools.com/html/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/html.png"
                      height={48}
                      width={48}
                      alt="html icon"
                    />
                  </a>
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/css.png"
                      height={48}
                      width={32}
                      alt="css icon"
                    />
                  </a>
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/javascript.png"
                      height={48}
                      width={45}
                      alt="javascript icon"
                    />
                  </a>
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/react.png"
                      height={48}
                      width={42}
                      alt="react icon"
                    />
                  </a>
                  <a
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/redux.svg"
                      height={48}
                      width={52}
                      alt="redux icon"
                    />
                  </a>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/nextjs.png"
                      height={48}
                      width={48}
                      alt="next js icon"
                    />
                  </a>{" "}
                </div>
              </div>
              <div className="d-flex mb-4 gap-3 align-items-baseline">
                <p>Backend:</p>
                <div className="d-flex gap-3">
                  {" "}
                  <a
                    href="https://www.ruby-lang.org/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/ruby.png"
                      height={48}
                      width={48}
                      alt="ruby icon"
                    />
                  </a>
                  <a
                    href="https://rubyonrails.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/rails.png"
                      height={48}
                      width={59}
                      alt="ruby on rails icon"
                    />
                  </a>
                  <a
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/Postgresql.png"
                      height={48}
                      width={48}
                      alt="postgre sql icon"
                    />
                  </a>
                  <a
                    href="https://nodejs.org/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/nodejs.png"
                      height={48}
                      width={79}
                      alt="node js icon"
                    />
                  </a>{" "}
                </div>
              </div>
              <div className="d-flex gap-3 align-items-baseline flex-wrap">
                <p>Tools & methods:</p>
                <div className="d-flex gap-3">
                  {" "}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/github.svg"
                      height={48}
                      width={48}
                      alt="github icon"
                    />
                  </a>
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/git.png"
                      height={48}
                      width={48}
                      alt="git icon"
                    />
                  </a>
                  <a
                    href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/bootstrap.png"
                      height={48}
                      width={61}
                      alt="bootstrap icon"
                    />
                  </a>
                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/sass.png"
                      height={48}
                      width={48}
                      alt="sass icon"
                    />
                  </a>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/Figma.svg"
                      height={48}
                      width={32}
                      alt="figma icon"
                    />
                  </a>
                  <a
                    href="https://jestjs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/jest.png"
                      height={48}
                      width={43}
                      alt="jest icon"
                    />
                  </a>
                  <a
                    href="https://rspec.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/rspec.svg"
                      height={48}
                      width={48}
                      alt="next js icon"
                    />
                  </a>
                  <a
                    href="https://webpack.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/icons/webpack3.png"
                      height={48}
                      width={48}
                      alt="webpack icon"
                    />
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
