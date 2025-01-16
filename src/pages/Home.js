import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../assets/projects.json';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={`https://raw.githubusercontent.com/Goncalves745/Portfolio/main/${project.image}`}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;