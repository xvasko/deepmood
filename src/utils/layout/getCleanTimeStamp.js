export const getCleanTimeStamp = (filthyTimeStamp) => {
    var date = new Date(filthyTimeStamp);
    return date.getDate() + '-' + (Number(date.getMonth()) + 1) + '-' + date.getFullYear() + '   '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}