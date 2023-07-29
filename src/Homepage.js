import React from 'react';

import Header from './Header';
import Hero from './Hero';
import FeaturedFreelancers from './FeaturedFreelancers';
import FeaturedCustomers from './FeaturedCustomers';
import SignUp from './CreateAccount';
import Footer from './Footer';

function Homepage() {
    return (
      <div>
        <Header />
        <Hero />
        <FeaturedFreelancers />
        <FeaturedCustomers />
        <SignUp />    
        <Footer />
      </div>
    );
  }
export default Homepage;
