import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { withRouter } from './withRouter';
import { Navigate } from "react-router-dom";

const Menu = ({ navigate }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                MERN SKELETON
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" /* style={isActive(navigate, "/")} */>
                    HomeIcon
                </IconButton>
            </Link>
            <Link to="/users">
                <Button /* style={isActive(navigate, "/users")} */>
                    Users
                </Button>
            </Link>
            {
                !auth.isAuthenticated() && (
                    <span>
                        <Link to="/signup">
                            <Button /* style={isActive(navigate, "/signup")} */>Sign Up</Button>
                        </Link>
                        <Link to="/signin">
                            <Button /* style={isActive(navigate, "/signin")} */>Sign In</Button>
                        </Link>
                    </span>
                )
            }
            {
                auth.isAuthenticated() && (
                    <span>
                        <Link to={"/user/" + auth.isAuthenticated().user._id}>
                            <Button /* style={isActive(navigate, "/user/" + auth.isAuthenticated().user._id)} */>
                                My Profile
                            </Button>
                            <Button color="inherit" onClick={() => { auth.clearJWT(() => <Navigate to='/'/>) }}>
                                Sign Out
                            </Button>
                        </Link>
                    </span>
                )
            }
        </Toolbar>
    </AppBar>
)

/* const isActive = (navigate, path) => {
   // navigate = useNavigate();

    if (navigate.to === path)
        return { color: '#ff4081' }
    else
        return { color: '#ffffff' }
}
 */
export default withRouter(Menu);