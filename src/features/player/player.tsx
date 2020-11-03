import React, { useEffect, useState } from "react";
import { Box, IconButton, Slider, Typography } from "@material-ui/core";
import { MusicNote, PauseOutlined, PlayArrowOutlined, SkipNext, SkipPrevious, VolumeOffRounded, VolumeUpRounded } from "@material-ui/icons";
import { PlayerProps } from "./player.props";
import { formatTime } from "./format-time";
import { useStyles } from "./player.styles";

const Player = ({ track: audio, handleChooseNextTrack, handleChoosePrevTrack }: PlayerProps) => {
    const classes = useStyles();

    const [isPlaying, setIsPlaying] = useState(false);
    const [track, setTrack] = useState(new Audio(audio.audio));
    const [currentTime, setCurrentTime] = useState(0);
    const [trackVolume, setTrackVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [trackDuration, setTrackDuration] = useState(0);
    const [sliderIsDragged, setSliderIsDragged] = useState(false);
    const [trackInterval, setTrackInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setTrack(new Audio(audio.audio));
    }, [audio.audio]);

    useEffect(() => {
        track.onended = () => {   
            onHandleChooseNextTrack();
        }
    }, [track, trackInterval]);

    const resetTrackData = () => {
        if (trackInterval) {
            clearInterval(trackInterval);
            setTrackInterval(null);
        }
        track.pause();
        setCurrentTime(0);
    }

    const onHandleChooseNextTrack = () => {
        resetTrackData();
        handleChooseNextTrack();
    }

    const onHandleChoosePrevTrack = () => {
        resetTrackData();
        handleChoosePrevTrack();
    }

    const handleToggleIsPlaying = () => {
        setIsPlaying(!isPlaying);
    }

    const handleToggleMutedTrack = () => {
        setIsMuted(!isMuted);
    }

    const handleChangeSliderIsDragged = () => {
        setSliderIsDragged(true);
    }

    const handleChangeCurrentTime = (e: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === "number") {
            setCurrentTime(value);
        }
    }

    const handleChangeVolumeValue = (e: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === "number") {
            setTrackVolume(value);
        }
    }

    useEffect(() => {
        track.muted = isMuted;
    }, [isMuted, track]);

    useEffect(() => {
        track.volume = trackVolume;
    }, [trackVolume, track]);

    const handleSubmitCurrentTime = () => {
        setSliderIsDragged(false);
        track.currentTime = currentTime;
    }

    useEffect(() => {
        track.onloadedmetadata = () => {
            setTrackDuration(track.duration);
        }
        if (isPlaying) {
            if (!sliderIsDragged) {
                setTrackInterval(setInterval(() => {
                    setCurrentTime(track.currentTime);
                }, 100));
            } else {
                if (trackInterval) {
                    clearInterval(trackInterval);
                }
            }
        } else {
            if (trackInterval) {
                clearInterval(trackInterval);
            }
        }
    }, [isPlaying, sliderIsDragged, track]);

    useEffect(() => {
        if (isPlaying) {
            track.play();
        } else {
            track.pause();
        }
    }, [isPlaying, track]);

    return (
        <Box className={classes.playerWrapper}>
            <Box display="flex" marginRight="auto" width="300px">
                {!audio.imgUrl && (
                    <Box className={classes.trackImage}>
                        <MusicNote />
                    </Box>
                )}
                <Box marginLeft="5px">
                    <Typography className={classes.trackTitle}>{audio.title}</Typography>
                    <Typography className={classes.trackAuthor}>{audio.authorName}</Typography>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box className={classes.controllsWrapper}>
                    <IconButton className={classes.iconButton} onClick={onHandleChoosePrevTrack}>
                        <SkipPrevious />
                    </IconButton>
                    {!isPlaying ? (
                        <IconButton onClick={handleToggleIsPlaying} className={classes.iconButton}>
                            <PlayArrowOutlined />
                        </IconButton>
                    ): (
                        <IconButton onClick={handleToggleIsPlaying} className={classes.iconButton}>
                            <PauseOutlined />
                        </IconButton>
                    )}
                    <IconButton className={classes.iconButton} onClick={onHandleChooseNextTrack}>
                        <SkipNext />
                    </IconButton>
                </Box>
                <Box className={classes.sliderWrapper}>
                    <Typography>{formatTime(currentTime)}</Typography>
                    <Slider
                        className={classes.slider}
                        value={currentTime} 
                        min={0} 
                        max={track.duration} 
                        onChange={handleChangeCurrentTime} 
                        onMouseDown={handleChangeSliderIsDragged} 
                        onMouseUp={handleSubmitCurrentTime}
                    />
                    <Typography>{isNaN(track.duration) ? "0:00" : formatTime(trackDuration)}</Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" marginLeft="auto">
                <Box>
                    {!isMuted ? (
                        <IconButton className={classes.iconButton} onClick={handleToggleMutedTrack}>
                            <VolumeUpRounded />
                        </IconButton>
                    ): (
                        <IconButton className={classes.iconButton} onClick={handleToggleMutedTrack}>
                            <VolumeOffRounded />
                        </IconButton>
                    )}
                </Box>
                <Box marginLeft="10px">
                    <Slider min={0} max={1} step={0.01} value={trackVolume} className={classes.volumeSlider} onChange={handleChangeVolumeValue}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Player;
