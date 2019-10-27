import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import MeetupDetail from '../pages/MeetupDetail';
import MeetupEditAdd from '../pages/MeetupEditAdd';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/detail/:id" component={MeetupDetail} isPrivate />
      <Route path="/meetup/edit/:id" component={MeetupEditAdd} isPrivate />
      <Route path="/meetup/new" component={MeetupEditAdd} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
