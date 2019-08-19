import React from 'react';
// import Carousel from '../layout/desktop/Carousel';
import Gallery from '../layout/Gallery';

const Home = () => {
  const links = ['art/original-art', 'art/fan-art', 'art/commissions'];
  const linkTitles = ['Original Art', 'Fan Art', 'Commissions'];
  return (
    <div>
      {/* <Carousel /> */}
      <Gallery links={links} linkTitles={linkTitles} />
    </div>
  );
};

export default Home;
