import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Slider, Typography } from "@material-ui/core";
import { PauseOutlined, PlayArrowOutlined } from "@material-ui/icons";
import { PlayerProps } from "./player.props";
import { formatTime } from "./format-time";
import { useStyles } from "./player.styles";

const Player = ({ audio }: PlayerProps) => {
    const classes = useStyles();

    const [isPlaying, setIsPlaying] = useState(false);
    const [track] = useState(new Audio(audio));
    const [currentTime, setCurrentTime] = useState(0);
    const [trackDuration, setTrackDuration] = useState(0);
    const [sliderIsDragged, setSliderIsDragged] = useState(false);

    const handleToggleIsPlaying = () => {
        setIsPlaying(!isPlaying);
    }

    const handleChangeSliderIsDragged = () => {
        setSliderIsDragged(true);
    }

    const handleChangeCurrentTime = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (typeof value === "number") {
            setCurrentTime(value);
        }
    }

    const handleSubmitCurrentTime = () => {
        console.log("UP")
        setSliderIsDragged(false);
        track.currentTime = currentTime;
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        track.onloadedmetadata = () => {
            setTrackDuration(track.duration);
        }
        if (isPlaying) {
            if (!sliderIsDragged) {
                interval = setInterval(() => {
                    setCurrentTime(track.currentTime);
                }, 100);
            } else {
                if (interval) {
                    clearInterval(interval);
                }
            }
        } else {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [isPlaying, sliderIsDragged]);

    useEffect(() => {
        if (isPlaying) {
            track.play();
        } else {
            track.pause();
        }
    }, [isPlaying]);

    return (
        <Box className={classes.playerWrapper}>
            
            <Box className={classes.controllsWrapper}>
                {!isPlaying ? (
                    <IconButton onClick={handleToggleIsPlaying}>
                        <PlayArrowOutlined />
                    </IconButton>
                ): (
                    <IconButton onClick={handleToggleIsPlaying}>
                        <PauseOutlined />
                    </IconButton>
                )}
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
    );
}

export default Player;
