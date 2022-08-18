import React from "react";
import MainRouter from './MainRouter.js'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme.js";
import { hot } from 'react-hot-loader/root';

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default hot(App);