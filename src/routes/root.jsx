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
            <Grid container item>
                <Header></Header>
            </Grid>
            <Grid container item justifyContent="center" style={{marginTop:'1em'}}>
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