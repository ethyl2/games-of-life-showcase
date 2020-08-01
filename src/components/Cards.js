import React from 'react';
import Card from './Card';
import projects from '../data/projects.js';

function Cards() {
  return (
    <div className="cards">
      {projects.map((project, index) => (
        <div key={`${project.name}-${index}`}>
          <Card
            url={project.url}
            name={project.name}
            imgSrc={project.imgSrc}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
