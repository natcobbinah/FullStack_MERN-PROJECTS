import React, { useEffect, useState } from "react";
import { list } from "./api-user";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles } from "@material-ui/core";
import { Typography, Paper, List } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}))

export default function Users() {
    const classes = useStyles();
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("listing users");
        const abortController = new AbortController();
        const signal = abortController.signal;

        list(signal)
            .then((data) => {
                if (data && data.error) {
                    console.log(data.error)
                } else {
                    setUsers(data)
                }
            })

        return function cleanup() {
            abortController.abort()
        }

    }, [])

    return (
        <Paper className={classes.root} elevation={4}>
            <Typography variant="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                {console.log(users)}
                {
                    users?.map((item, index) => {
                        return <Link to={"/user/" + item._id} key={index}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        {item.name.substring(0,1)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        {/*  <ArrowForwardIcon /> */}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    })
                }
            </List>
        </Paper>
    )
}