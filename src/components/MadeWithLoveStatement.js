import Typography from "@material-ui/core/Typography";
import React from "react";

export default function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}

            {' Kite team.'}
        </Typography>
    );
}