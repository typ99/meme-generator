import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <img
        src='./images/troll-face.png'
        className='header--image'
        alt='Troll face'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>typ99</h4>
    </header>
  );
}
