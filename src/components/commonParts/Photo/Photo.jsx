import React from 'react';
import './Photo.scss';

export default function Photo({ imagePath }) {

  return (
    <div style={{ backgroundImage: `url(${imagePath})` }} className="photoDiv"></div>
  );
}