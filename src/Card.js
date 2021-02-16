import React from 'react';
import './Card.css';

const Card = ({ title, body, id, removeIdea, archiveIdea, status }) => {
  return(
    <div>
      <h1 className={status ? "archived" : null}>
        {title}
      </h1>
      <p className={status ? "archived" : null}>
        {body}
      </p>
      <button 
        onClick={() => removeIdea(id)}>
        delete
      </button>
      <button 
      onClick={() => archiveIdea(id)}>
        {status ? "unarchive" : "archive"}
      </button>
    </div>
  );
}

export default Card;