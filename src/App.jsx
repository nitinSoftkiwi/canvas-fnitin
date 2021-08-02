import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './component/DefaultLayout';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
