import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={DefaultComponent}></Route>
            {/* <Route path="/" component={AnotherComponent}></Route> */}
        </BrowserRouter>
    );
}