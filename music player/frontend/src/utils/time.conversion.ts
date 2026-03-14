function timeConversionUtil(totalMinutes: any) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
    let seconds = Math.floor((totalMinutes % 1) * 60);

    let timeString = `${hours} m:${String(minutes).padStart(2, '0')} s:${String(seconds).padStart(2, '0')} ms`;

    return timeString;
}
export { timeConversionUtil };