// import Footer from 'components/Footer';
import React from 'react';
import Header from '../components/header/index.js'
import Footer from '../components/footer/index.js'
function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
  }
  
  export default Layout;
  