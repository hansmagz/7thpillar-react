import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import AppBar from '../components/appbar'
import Header from '../components/header'
import Footer from '../components/footer'

function root() {
    return (
        // <>
        //     <Header></Header>
        //     <Outlet />
        //     <Footer></Footer>
        // </>
        <Grid container>
            <Header></Header>
            <Grid container item justifyContent="center">
                {/* <Grid item xs={11} sm={10}>
                    <Outlet />
                </Grid> */}
                <Outlet />
            </Grid>
            <Grid container item>
                <Footer></Footer>
            </Grid>
        </Grid>
    );
}
export default root;