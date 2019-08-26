import React from 'react';
import './styling/App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;