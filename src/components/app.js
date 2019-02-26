import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import MenuList from "@material-ui/core/MenuList/MenuList";
import React, {Fragment} from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import {Main} from "./main";
import {Link} from "react-router-dom";

export const App = () => (
    <Fragment>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Graduate admin
                </Typography>
            </Toolbar>
        </AppBar>
        <MenuList>
            <Link to='/'><MenuItem>Home</MenuItem></Link>
            <Link to='/add-pupil'><MenuItem>Add new pupil</MenuItem></Link>
        </MenuList>
        <Main />
    </Fragment>
);