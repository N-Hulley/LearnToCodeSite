function validLength(conditions, string, min, max) {
    if (string.length < min) conditions.push("lengthShort");
    if (string.length > max) conditions.push("lengthLong");
    return true;
}


const validate = {
    displayname: function(username) {

        const minUsernameLength = 3;
        const maxUsernameLength = 30;
        const containsLettersAndNumbers = /^[a-zA-Z0-9]+$/!;

        let valid = false;
        let conditions = [];

        validLength(conditions,
            username,
            minUsernameLength,
            maxUsernameLength
        );

        if (containsLettersAndNumbers.test(username)) {
            conditions.push("")
        }
        if (!validLength(name))

            return true;

    },
    email: function(username) {
        var displaynameRegex = /^[a-zA-Z0-9]+$/;
        return true;

    },
    password: function(username) {
        var displaynameRegex = /^[a-zA-Z0-9]+$/;
        return true;

    },
}

export default validate;