import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({


    statement: {
        padding: theme.spacing(3,2),
        marginTop: "25%",
        backgroundColor: "rgba(238,249,230,0.26)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));

export default function Slash () {
    const classes = useStyles();

return (
    <Paper className={classes.statement}>
        <Typography variant="h1" component="h1">
            KITe
        </Typography>
        <Typography />
        {<br />}
        <Typography component="p">
            Connecting People in Remote Places With The People That Matter
        </Typography>
        <Typography component="p">
            & Memories That Will Never Be Forgotten
        </Typography>
    </Paper>
)
}