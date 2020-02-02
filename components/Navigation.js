import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link href="/">
            <button><h2 className="nav__link-item">Timer</h2></button>
          </Link>
        </li>
        <li className="nav__list-item--line"> 
          <span className="nav__line"></span>
        </li>
        <li className="nav__list-item">
        <Link href="/stopwatch">
            <button><h2 className="nav__link-item">Stopwatch</h2></button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
