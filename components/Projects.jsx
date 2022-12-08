import React from 'react';
import dommie from '../public/assets/dommie.jpeg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto py-32'>
        <p className='gradient-text uppercase tracking-widest pl-5 xl:pl-0 '>
          Projects
        </p>
        <h2 className='pl-5 xl:pl-0 mb-3 sm:mb-5'>What I&apos;ve built</h2>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-4 xl:mx-0'>
          <ProjectItem
            title='Easy Fly'
            image={dommie}
            tech='React/RoR'
            projectUrl='/easy-fly'
          />
          <ProjectItem
            title='BuddGet'
            image={dommie}
            tech='Ruby on Rails'
            projectUrl='/buddget'
          />
          <ProjectItem
            title='Dream Picture'
            image={dommie}
            tech='React'
            projectUrl='/dream-picture'
          />
          <ProjectItem
            title='Recipe App'
            image={dommie}
            tech='Ruby on Rails'
            projectUrl='/recipe'
          />
          <ProjectItem
            title="Space Traveler's Hub"
            image={dommie}
            tech='React'
            projectUrl='/space-travelers-hub'
          />
          <ProjectItem
            title='Awesome Books'
            image={dommie}
            tech='React'
            projectUrl='/awesome-books'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
