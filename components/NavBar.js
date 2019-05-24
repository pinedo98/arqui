import React from 'react';
import NavBarLink from './NavBarLink';

import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

export default class NavBar extends React.Component {

  state = {
    open: false
  };

  render() {
    return (
      <div className='navbar'>
        <div
          style={{
            zIndex: 100,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/">
            <div className='logoContainer'>
              <img src='../static/images/cpu.png' alt="Arquitectuta de computadoras logo" width='40' height='40' />
            </div>
          </Link>

          <div
            className='navbarLinkToggle'
            onClick={() => {
              const navs = document.querySelectorAll('.navbarItems');
              navs.forEach(nav => nav.classList.toggle('navbarToggleShow'));
              this.setState({ open: !this.state.open });
            }}
          >
            {this.state.open ? (
              <FaTimes size='1.5em' />
            ) : (
              <FaBars size='1.5em' />
            )}
          </div>
        </div>

        <div className='navbarItems navbarItemsRight'>
          <NavBarLink to='/'>Inicio</NavBarLink>
          <NavBarLink to='/temary'>Temario</NavBarLink>
          <NavBarLink to='/about'>Acerca del proyecto</NavBarLink>

        </div>
      </div>
    );
  }
}