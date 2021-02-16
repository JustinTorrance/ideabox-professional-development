import React from 'react';

const Card = ({ title, body, id, removeIdea, archiveIdea }) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}>delete</button>
      <button onClick={() => archiveIdea(id)}>archive</button>
    </div>
  );
}

export default Card;