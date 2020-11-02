export const formatTime = (time: number) => {
    const flouredTime = Math.floor(time);
    let minutesCount = 0;
    let secondsCount = flouredTime;



    if (flouredTime >= 60) {
        minutesCount = Math.floor(flouredTime / 60);
        secondsCount = flouredTime - minutesCount * 60;
    }

    return `${minutesCount}:${secondsCount > 9 ? secondsCount : `0${secondsCount}`}`;
}
