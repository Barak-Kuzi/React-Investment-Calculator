import './App.css';
import React, { Fragment } from 'react';

import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App(): React.JSX.Element {
  return (
      <Fragment>
        <Header />
        <MainContainer />
      </Fragment>
  );
}

export default App;
