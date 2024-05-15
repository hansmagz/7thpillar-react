import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from '../components/header'
import Footer from '../components/footer'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

function root() {
    return (
        // <>
        //     <Header></Header>
        //     <Outlet />
        //     <Footer></Footer>
        // </>
        <Grid container>
            <Grid container item justifyContent="center">
                {/* <Grid item xs={11} sm={10}>
                    <Outlet />
                </Grid> */}
                <Outlet />
            </Grid>
        </Grid>
    );
}
export default root;