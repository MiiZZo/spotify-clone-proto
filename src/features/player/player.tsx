import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, Slider, Typography } from "@material-ui/core";
import {
  MusicNote,
  PauseOutlined,
  PlayArrowOutlined,
  SkipNext,
  SkipPrevious,
  VolumeOffRounded,
  VolumeUpRounded
} from "@material-ui/icons";
import { formatTime } from "./format-time";
import { useStyles } from "./player.styles";
import { PlayerStoreContext } from "./player-store.context";
import { observer } from "mobx-react-lite";
import { TrackStoreContext } from "../track/track-store.context";

const Player = observer(() => {
  const playerStore = useContext(PlayerStoreContext)!;
  const trackStore = useContext(TrackStoreContext)!;
  const classes = useStyles();

  const [currentTime, setCurrentTime] = useState(0);
  const [sliderIsDragged, setSliderIsDragged] = useState(false);

  const track = trackStore.findTrackById(playerStore.tracksId[playerStore.currentTrackIndex]);
  
  useEffect(() => {
    playerStore.audio.onended = () => {
      onHandleChooseNextTrack();
    };
  }, [playerStore.audio, playerStore.trackIntervalId]);

  const resetTrackData = () => {
    if (playerStore.trackIntervalId) {
      playerStore.clearTrackInterval();
    }
    setCurrentTime(0);
    playerStore.changeCurrentTrackTime(0);
  };

  const onHandleChooseNextTrack = () => {
    resetTrackData();
    playerStore.skipToNextTrack();
  };

  const onHandleChoosePrevTrack = () => {
    resetTrackData();
    playerStore.skipToPrevTrack();
  };

  const handlePlayTrack = () => {
    playerStore.playAudio();
  };

  const handlePauseTrack = () => {
    playerStore.pauseAudio();
  };

  const handleMuteTrack = () => {
    playerStore.muteAudio();
  };

  const handleUnmuteTrack = () => {
    playerStore.unmuteAudio();
  };

  const handleChangeSliderIsDragged = () => {
    setSliderIsDragged(true);
  };

  const handleChangeCurrentTime = (
    e: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      setCurrentTime(value);
    }
  };

  const handleChangeVolumeValue = (
    e: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      playerStore.changeVolumeValue(value);
    }
  };

  const handleSubmitCurrentTime = () => {
    setSliderIsDragged(false);
    playerStore.changeCurrentTrackTime(currentTime);
  };

  useEffect(() => {
    if (playerStore.isPlaying) {
      if (!sliderIsDragged) {
        playerStore.setTrackInterval(
          setInterval(() => {
            setCurrentTime(playerStore.audio.currentTime);
          }, 100)
        );
      } else {
          if (playerStore.trackIntervalId) {
          playerStore.clearTrackInterval();
        }
      }
    } else {
      if (playerStore.trackIntervalId) {
        playerStore.clearTrackInterval();
      }
    }
  }, [playerStore.isPlaying, sliderIsDragged, playerStore.audio]);

  return (
    <Box className={classes.playerWrapper}>
      <Box display="flex" marginRight="auto" width="300px">
        {true && (
          <Box className={classes.trackImage}>
            <MusicNote />
          </Box>
        )}
        <Box marginLeft="5px">
        <Typography className={classes.trackTitle}>{track.title}</Typography>
          <Typography className={classes.trackAuthor}>{track.author}</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className={classes.controllsWrapper}>
          <IconButton
            className={classes.iconButton}
            onClick={onHandleChoosePrevTrack}
          >
            <SkipPrevious />
          </IconButton>
          {!playerStore.isPlaying ? (
            <IconButton
              onClick={handlePlayTrack}
              className={classes.iconButton}
            >
              <PlayArrowOutlined />
            </IconButton>
          ) : (
            <IconButton
              onClick={handlePauseTrack}
              className={classes.iconButton}
            >
              <PauseOutlined />
            </IconButton>
          )}
          <IconButton
            className={classes.iconButton}
            onClick={onHandleChooseNextTrack}
          >
            <SkipNext />
          </IconButton>
        </Box>
        <Box className={classes.sliderWrapper}>
          <Typography>{formatTime(currentTime)}</Typography>
          <Slider
            className={classes.slider}
            value={currentTime}
            min={0}
            max={playerStore.trackDuration}
            onChange={handleChangeCurrentTime}
            onMouseDown={handleChangeSliderIsDragged}
            onMouseUp={handleSubmitCurrentTime}
          />
          <Typography>{formatTime(playerStore.trackDuration)}</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" marginLeft="auto">
        <Box>
          {!playerStore.isMuted ? (
            <IconButton
              className={classes.iconButton}
              onClick={handleMuteTrack}
            >
              <VolumeUpRounded />
            </IconButton>
          ) : (
            <IconButton
              className={classes.iconButton}
              onClick={handleUnmuteTrack}
            >
              <VolumeOffRounded />
            </IconButton>
          )}
        </Box>
        <Box marginLeft="10px">
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={playerStore.trackVolume}
            className={classes.volumeSlider}
            onChange={handleChangeVolumeValue}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default Player;
