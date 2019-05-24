import React from 'react';
import Link from 'next/link'

import '../global.css'

const NavBarLink = props => {
  let { style, children, to } = props;
  return (
    <div  style={style}>
      <Link href={to}>
          <a className='navbarLink'> {children} </a>
      </Link>
    </div>
  );
};

export default NavBarLink;
