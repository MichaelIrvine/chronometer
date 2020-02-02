import App from 'next/app';

import '../public/styles/sass/styles.scss';

import Layout from '../components/Layout';



class timerApp extends App {

  render(){
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
  }
}

export default timerApp;