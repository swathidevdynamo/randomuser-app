import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ListPage from '../components/ListPage';

const Home = () => {

  return (
      <div style={{ margin: 30 }}>
        <Header/>
        <ListPage />
        <Footer />        
      </div>
  );
};

export default Home;