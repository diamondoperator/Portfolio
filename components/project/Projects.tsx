import ProjectItem from "./ProjectItem";


import bemusicImg from "../../public/assets/projects/bemusic.png";
import burchfieldImg from "../../public/assets/projects/burchfield.png";
import daddygreensImg from "../../public/assets/projects/daddygreens.png";
import meteormanImg from "../../public/assets/projects/meteorman.png";
import muspopinaImg from "../../public/assets/projects/muspopina.png";
import yaleImg from "../../public/assets/projects/yale.png";

// holds all project items in projects
function ProjectsContainer(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <ProjectItem
        backgroundImg={bemusicImg}
        projectUrl="https://bryantdavis.tsiacademy.org/webapps/week3/productpage/"
        tech="Wordpress, Divi"
        title="Bemusic product page"
      />

      <ProjectItem
        backgroundImg={burchfieldImg}
        projectUrl="/movie-database"
        tech="Builder"
        title="Charles E Burchfield website"
      />

      <ProjectItem
        backgroundImg={daddygreensImg}
        projectUrl="/weather"
        tech="Wordpress, SKT"
        title="Daddy Greens Pizza (the last dragon)"
      />

      <ProjectItem
        backgroundImg={meteormanImg}
        projectUrl="/dictionary"
        tech="biolink, video editing, AR"
        title="MeteorMan media kit"
      />

      <ProjectItem
        backgroundImg={muspopinaImg}
        projectUrl="/recipes"
        tech="Builder"
        title="Mus Popina restaurant"
      />

      <ProjectItem
        backgroundImg={yaleImg}
        projectUrl="/open-ai"
        tech="Wordpress, Divi"
        title="Yale School Of Art redesign prototype"
      />
    </div>
  );
}

// projects component
export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-indigo-600 text-center xl:text-start pt-12 lg:pt-64">
          Projects
        </p>
        <h2 className="py-4 text-center xl:text-start">
          Projects I loved Developing
        </h2>
        <ProjectsContainer />
      </div>
    </div>
  );
}
