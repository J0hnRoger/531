import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProgramBuilder from './Pages/ProgramBuilder';
import MuscleDatas from './Pages/MuscleDatas';


export const routes = <Layout>
     <Switch>
    <Route exact path='/' component={ Login } />
    <Route path='/home' component={ Home } />
    <Route path='/program-builder' component={ ProgramBuilder } />
    <Route path='/muscle-datas' component={ MuscleDatas } />
    </Switch>
</Layout>; 