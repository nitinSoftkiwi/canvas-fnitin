import React, {Suspense} from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import routes from '../routes';

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

const DefaultLayout = () => {

  return (
    <React.Fragment>
      <Container className="themed-container" fluid={true}>
        <Suspense fallback={loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/" />
          </Switch>
        </Suspense>
      </Container>


    </React.Fragment>
  )
}

export default DefaultLayout