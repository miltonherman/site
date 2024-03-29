import React from 'react';
import Layout from '../components/layout';
import Header from '../components/landing/header/header';
import Latest from '../components/landing/latest';
import LatestBlog from '../components/landing/latest-blog/latest-blog';
import LatestNews from '../components/landing/latest-news/latest-news';
import FocusAndScale from '../components/landing/focus-and-scale/focus-and-scale';
import LearnAndRemember from '../components/landing/learn-and-remember/learn-and-remember';
import ConfidentAndTransparent from '../components/landing/confident-and-transparent/confident-and-transparent';
import Feedback from '../components/landing/feedback/feedback';
import CreateKnoowledge from '../components/landing/create-knowledge/create-knowledge';
import '../styles/general.scss';

class ToppleLanding extends React.Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Latest>
          <LatestNews/>
          <LatestBlog/>
        </Latest>
        <FocusAndScale></FocusAndScale>
        <LearnAndRemember></LearnAndRemember>
        <ConfidentAndTransparent></ConfidentAndTransparent>
        <Feedback></Feedback>
        <CreateKnoowledge></CreateKnoowledge>
      </Layout>
    );
  }
}

export default ToppleLanding;
