import { AwesomeBooks } from "./projects/awesomebooks"
import { Leaderboard } from "./projects/leaderboard"
import { Sziget } from "./projects/sziget"
import { ApodReact } from "./projects/apod"
import { BudgetApp } from "./projects/budget"
import { Investigators } from "./projects/investigators"

export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-5">
        <div className="m-3 p-3 d-flex flex-column align-items-center bg-dark text-light">
          <h1 className="card-title">My recent projects:</h1>
          <section className="row justify-content-center">
            <AwesomeBooks />
            <Leaderboard />
            <Sziget />
            <ApodReact />
            <BudgetApp />
            <Investigators />
          </section>
        </div>
      </section>
    </>
  )
}