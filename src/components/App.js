import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Interested from '../pages/Interested';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import BadgeDetailsCustomUserContainer from '../pages/BadgeDetailsCustomUserContainer';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:userId" component={Profile} />      
          <Route exact path="/signup" component={SignUp} />        
          <Route exact path="/badges/query/:query" component={Badges} />
          <Route exact path="/badges/query/" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId/details" component={BadgeDetailsContainer} />
          <Route exact path="/badges/:badgeId/detailsCustomUser" component={BadgeDetailsCustomUserContainer} />
          <Route exact path="/interested/:userId" component={Interested} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;