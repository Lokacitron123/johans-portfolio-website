import React from "react";
import { SectionHeading } from "../components/ui/Heading";
import ProjectCardTwo from "../components/projectcard/ProjectCardTwo";
import { Divider } from "../components/ui/Divider";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className='mx-auto mb-10'>
      <SectionHeading title='Projects' />
      <div className='mx-auto flex flex-col justify-center items-center gap-20'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCardTwo
              description={project.description}
              skills={project.skills}
              url={project.url}
              image={project.image}
              name={project.name}
            />
            <Divider />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
