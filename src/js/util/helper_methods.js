export const parseDateTime = dateTimeString => {
    if (dateTimeString) {
        return dateTimeString.split(' ').slice(0, 4).join(' ');
    }
};

export const characterLimit = string => {
    return string.substring(0, 50);
};
