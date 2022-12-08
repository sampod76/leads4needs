import React from 'react';
import { Route } from 'react-router';

export default (
  <Route>
    <Route path='/' />
    <Route path='/admin/view-profile/:id/:userId' />
    <Route path='/admin/update/user/:id' />

    <Route path='/admin/update/pg/:id' />


    <Route path='/admin/view-profile/:id/:userId' />
    <Route path='/admin/update/user/:id' />

    <Route path='/admin/update/pg/:id' />

    <Route path='/admin/user-list' />
    <Route path='/admin/pg-list' />
    <Route path='/admin/pending' />
    <Route path='/admin/user/ownedpg/:id' />





    <Route path='/app' />
    <Route path='/homePage' />
    <Route path='/createpg' />
    <Route path='/edit' />
    <Route path='/view/:id' />
    <Route path='/notification' />

    <Route path='/semd' />
  </Route>
);