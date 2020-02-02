import React from 'react';
import Branding from './Branding';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div className="header">
      <Branding />
      <Navigation />
    </div>
  )
}
