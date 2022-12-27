import "./ProjectList.css";
import ProductCardNEW from "../ProductCard/ProductCardNEW";
import { projectsArray } from "./projectsArray";

export default function ProjectList () {
  return (
    <main className="portfolio">
      <section className="portfolio-text">
        <h1 className="portfolio-title">Projects</h1>
        <span className="portfolio-subtitle"> See them in action or it´s repos</span>
      </section>

      <section className="cards-container">
        {projectsArray.map(project =>{
          // title, description, cover, tag, url, background = "#D2F3F4"}
          return (
          <ProductCardNEW
            title={project.h3}
            description={project.p}
            cover={project.img}
            tag={project.tag} 
            url={project.img}
            bg={project.bg ? (project.bg) : "#D2F3F4"}
          /> )
        })}
      </section>
    </main>

  )
};