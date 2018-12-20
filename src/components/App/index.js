import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from 'components/common/Header';
import TypingsView from 'components/views/TypingsView';
import EncountersView from 'components/views/EncountersView';

const App = () => {
  useEffect(() => console.log('App used effect'));

  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" render={() => <Redirect to="/types" />} />
        <Route path="/" component={Header} />
        <Route path="/types" component={TypingsView} />
        <Route path="/encounters" component={EncountersView} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
