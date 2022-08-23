import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import auth from "./auth-helper";
import { signin } from "../user/api-auth";
import {
    makeStyles, Card, CardContent, Typography, TextField, CardActions, Button,
    Icon
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))

export default function Signin(props) {
    const classes = useStyles();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false,
    })

    const handleChange = name => event => {
        setValues({
            ...values, [name]: event.target.value
        })
    }

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                auth.authenticate(data, () => {
                    setValues({
                        ...values, error: '',
                        redirectToReferrer: true
                    })
                })
                console.log("Set values completed")
            }

            const { redirectToReferrer } = values
            if (redirectToReferrer) {
                console.log("SignIn successful")
                navigate("/", { replace: true });
            }
        })
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Sign In
                    </Typography>
                    <TextField id="email" type="email" label="Email" className={classes.textField}
                        value={values.email} onChange={handleChange('email')} margin="normal" />
                    <br />
                    <TextField id="password" type="password" label="Password" className={classes.textField}
                        value={values.password} onChange={handleChange('password')} margin="normal" />
                    <br />
                    {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>
                        Submit
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}