import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import DataProvider from './hooks/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Header text="Hei i'm awsoem" />
      <Content />
    </DataProvider>
  );
}

export default App;
