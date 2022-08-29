import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../auth/auth-helper';
import { withRouter } from './withRouter';
import HomeIcon from '@mui/icons-material/Home';

const Menu = ({ router } = props) => {
    let { navigate } = router;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    MERN SKELETON
                </Typography>
                <Link to="/">
                    <IconButton aria-label="Home" style={isActive(navigate, "/")} >
                       <HomeIcon/>
                    </IconButton>
                </Link>
                <Link to="/users">
                    <Button style={isActive(navigate, "/users")} >
                        Users
                    </Button>
                </Link>
                {
                    !auth.isAuthenticated() && (
                        <span>
                            <Link to="/signup">
                                <Button style={isActive(navigate, "/signup")}  >Sign Up</Button>
                            </Link>
                            <Link to="/signin">
                                <Button style={isActive(navigate, "/signin")}  >Sign In</Button>
                            </Link>
                        </span>
                    )
                }
                {
                    auth.isAuthenticated() && (
                        <span>
                            <Link to={"/user/" + auth.isAuthenticated().user._id}>
                                <Button style={isActive(navigate, "/user/" + auth.isAuthenticated().user._id)} >
                                    My Profile
                                </Button>
                            </Link>
                            <Button color="inherit" onClick={() => {
                                auth.clearJWT(() => navigate("/", { replace: true }))
                            }}>
                                Sign Out
                            </Button>
                        </span>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

const isActive = (navigate, path) => {
    if (navigate.to === path)
        return { color: '#ff4081' }
    else
        return { color: '#ffffff' }
}

export default withRouter(Menu);