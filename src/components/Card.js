import React from 'react';

function Card(props) {
  return (
    <div className="card">
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
