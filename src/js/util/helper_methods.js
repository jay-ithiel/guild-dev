export const parseDateTime = dateTimeString => {
    if (dateTimeString) {
        return dateTimeString.split(' ').slice(0, 4).join(' ');
    }
};
