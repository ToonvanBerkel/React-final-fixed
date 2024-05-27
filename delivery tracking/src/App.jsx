import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import PackageList from './components/PackageList';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <PackageList></PackageList>
      </Layout>
    </>
  );
}

export default App;