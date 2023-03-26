const getDayFromDate = (dateString) => {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date(dateString).getDay();
    return daysOfTheWeek[day];
}

console.log(getDayFromDate('05 / 23 / 1999'));