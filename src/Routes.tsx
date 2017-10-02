import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import Home from './Pages/Home';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
</Layout>; 