export const getCleanTimeStamp = (filthyTimeStamp) => {
    var date = new Date(filthyTimeStamp);
    return date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + ': '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}