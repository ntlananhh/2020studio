// import Footer from 'components/Footer';
import React from 'react';
import Header from '../components/header/index.js'
function Layout({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
  }
  
  export default Layout;
  