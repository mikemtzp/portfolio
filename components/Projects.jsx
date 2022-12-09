import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto py-32'>
        <p className='gradient-text uppercase tracking-widest pl-5 xl:pl-0 '>
          Projects
        </p>
        <h2 className='pl-5 xl:pl-0 mb-3 sm:mb-5'>What I&apos;ve built</h2>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-4 xl:mx-0'>
          {projects.map((project) => (
            <ProjectItem
              title={project.title}
              image={project.image}
              tech={project.tech}
              projectUrl={project.projectUrl}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
