import React from 'react';
import Layout from '../components/layout';
import Header from '../components/landing/Header';
import LatestBlog from '../components/landing/latest-blog';
import FocusAndScale from '../components/landing/focus-and-scale';
import LearnAndRemember from '../components/landing/learn-and-remember';
import ConfidentAndTransparent from '../components/landing/confident-and-transparent';
import Feedback from '../components/landing/feedback';
import CreateKnoowledge from '../components/landing/create-knowledge';
import Footer from '../components/landing/footer';

class ToppleLanding extends React.Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <LatestBlog></LatestBlog>
        <FocusAndScale></FocusAndScale>
        <LearnAndRemember></LearnAndRemember>
        <ConfidentAndTransparent></ConfidentAndTransparent>
        <Feedback></Feedback>
        <CreateKnoowledge></CreateKnoowledge>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default ToppleLanding;
