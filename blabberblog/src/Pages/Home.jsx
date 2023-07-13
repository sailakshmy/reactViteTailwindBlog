import React from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import MainPost from '../Components/MainPost';
import Blogs from '../Components/Blogs';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
        <Header />
        <Search />
        <MainPost />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home
