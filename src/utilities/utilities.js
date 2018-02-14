export const calculateHourDiff = pastTime => {
    let past = new Date(pastTime);
    past = past.getTime();
    let now = Date.now("UTC");
    let elapsed = now - past;
    let diff = new Date(elapsed);
    let hours = diff.getHours();
    let days = 0;
    if (hours >= 24) {
        days += 1;
    }
    return days >= 1 ? days + " days" : hours + " hours";
};