import {
  TableContainer,
  Table,
  Paper,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  createStyles,
  withStyles,
} from "@material-ui/core";
import { DateRange, WatchLater } from "@material-ui/icons";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { PlayerStoreContext } from "../../features/player/player-store.context";
import { TrackTableProps } from "./track-table.props";
import { useStyles } from "./track-table.styles";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      color: theme.palette.common.white,
    },
  })
)(TableCell);

const TrackTable = observer(({ tracks }: TrackTableProps) => {
  const classes = useStyles();
  const playerStore = useContext(PlayerStoreContext)!;

  return (
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
          {tracks.map(
            ({ author, createdAt, duration, id, title }, i) => (
              <TableRow
                onClick={() => playerStore.setCurrentTrack(i)}
                key={id}
                className={
                  playerStore.currentTrackIndex === i
                    ? `${classes.currentTrack} ${classes.tableRow}`
                    : classes.tableRow
                }
              >
                <StyledTableCell component="th" scope="row">
                  {title}
                </StyledTableCell>
                <StyledTableCell align="right">{author}</StyledTableCell>
                <StyledTableCell align="right">{createdAt}</StyledTableCell>
                <StyledTableCell align="right">{duration}</StyledTableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default TrackTable;
