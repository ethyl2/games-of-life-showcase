import React from 'react';

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

function Card(props) {
  return (
    <div
      className="card"
      style={{
        boxShadow: `0 0 0 1em ${
          borderColors[props.index % borderColors.length]
        }`,
      }}
    >
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img
          src={props.imgSrc}
          alt={`${props.name}'s Game of Life screenshot`}
        />
      </a>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Card;
