import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div>
    <NavBar siteTitle={"Arquitectura de computadoras"} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1100,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0
      }}
    >
      <main>{children}</main>

      <footer>© {new Date().getFullYear()}, Fernando Pinedo</footer>
    </div>
  </div>
);

export default Layout;
