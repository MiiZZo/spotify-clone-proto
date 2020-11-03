import {
  Box,
  Button,
  Container,
  createStyles,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Favorite, MusicNote, DateRange, WatchLater } from "@material-ui/icons";
import React, { useContext } from "react";
import { useStyles } from "./playlist-page.styles";
import { PlaylistStoreContext } from "./playlist-store.context";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      color: theme.palette.common.white
    }
  })
)(TableCell);

const PlaylistPage = () => {
  const classes = useStyles();
  
  const playlistStore = useContext(PlaylistStoreContext)!;

  return (
    <Container maxWidth="lg">
      <Box display="flex" marginRight="auto" marginTop="60px">
        {true && (
          <Box
            className={classes.playlistImage}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MusicNote
              color="secondary"
              className={classes.playlistImageIcon}
            />
          </Box>
        )}
        <Box marginLeft="15px" marginTop="auto" marginBottom="5px">
          <Typography className={classes.text} color="secondary">Playlist</Typography>
          <Typography color="secondary" className={classes.playlistTitle}>
            My Playlist #1
          </Typography>
          <Typography color="secondary" className={classes.playlistAuthor}>
            Created by MiiZZo
          </Typography>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.playButton}
          >
            Play
          </Button>
          <IconButton color="secondary" className={classes.favoriteButton}>
            <Favorite />
          </IconButton>
        </Box>
      </Box>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Artist</StyledTableCell>
              <StyledTableCell align="right">
                <DateRange color="secondary" />
              </StyledTableCell>
              <StyledTableCell align="right">
                <WatchLater color="secondary" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlistStore.playlists[0].tracks.map(({ author, createdAt, duration, id, title }) => (
              <TableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  {title}
                </StyledTableCell>
                <StyledTableCell align="right">{author}</StyledTableCell>
                <StyledTableCell align="right">{createdAt}</StyledTableCell>
                <StyledTableCell align="right">{duration}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PlaylistPage;