const specialChars = /[^\w]/gi;

export function getSanitizedName(value) {
    let result = value;

    if (value !== null && value !== undefined) {
        value = value.toLowerCase();
        value = value.replace(specialChars, '');
        result = value;
    }

    return result;
}
