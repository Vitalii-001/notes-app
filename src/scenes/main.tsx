import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import { PupilList } from './Pupils/pupil-list/pupil-list';
import { TeacherList } from './Teachers/teacher-list/teacher-list';

export const Main = () => (
  <main className='scene-container'>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/pupils" component={ PupilList } />
      <Route path="/teachers" component={ TeacherList } />
    </Switch>
  </main>
);
