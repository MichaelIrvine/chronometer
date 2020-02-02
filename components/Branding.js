import React from "react";
import Link from "next/link";
import Hourglass from '../public/static/icons/noun_hourglass.svg';


export default function Branding() {
  return (
    <div className="branding">
      <Link href="/">
        <button>
          <h1>Chronometer</h1>
        </button>
      </Link>
    </div>
  );
}
