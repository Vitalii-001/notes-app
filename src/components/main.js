import { Switch, Route } from 'react-router-dom'
import React from "react";
import {Home} from "./home";
import {AddPupil} from "./pupils/add-pupil/add-pupil";

 export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add-pupil' component={AddPupil}/>
        </Switch>
    </main>
);