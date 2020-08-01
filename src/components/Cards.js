import React from 'react';
import Card from './Card';
import projects from '../data/projects.js';

const borderColors = [
  '#845369',
  '#D1787A',
  '#EA8968',
  '#F09D5B',
  '#E8B943',
  '#EBDD7C',
  '#87566C',
  '#851625',
];

function Cards() {
  return (
    <div className="cards">
      {projects.map((project, index) => (
        <div
          className="card"
          style={{
            boxShadow: `0 0 0 .6em ${
              borderColors[index % borderColors.length]
            }`,
          }}
        >
          <Card url={project.url} name={project.name} imgSrc={project.imgSrc} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
