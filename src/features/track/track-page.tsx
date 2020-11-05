import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import TrackTable from "../../common/track-table/track-table";
import { useStyles } from "./track-page.styles";
import { TrackStoreContext } from "./track-store.context";

const TrackPage = () => {
  const classes = useStyles();

  const trackStore = useContext(TrackStoreContext)!;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography color="secondary" variant="h2">Songs</Typography>
      <Button className={classes.playButton} variant="contained" color="secondary">Play</Button>
      <Box marginTop="50px">
        <TrackTable 
          tracks={trackStore.tracks}
        />
      </Box>
    </Container>
  );
}

export default TrackPage;
