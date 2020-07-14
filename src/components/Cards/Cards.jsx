import React from "react";
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'

const Cards = ({data : {confirmed, deaths, recovered, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify={"center"}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of active cases of Covid -19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of recoveriesfrom  Covid -19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of deaths caused by Covid -19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
