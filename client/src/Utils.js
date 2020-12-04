function validateLength(conditions, string, min, max) {
    if (string.length < min) { conditions.push("lengthShort"); return false; }
    if (string.length > max) { conditions.push("lengthLong"); return false; }
    return true;
}


const validate = {
    displayname: function(displayname) {
        let valid = false;
        let conditions = [];

        // Validating the length
        const minUsernameLength = 3;
        const maxUsernameLength = 30;
        if (!validateLength(
                conditions,
                displayname,
                minUsernameLength,
                maxUsernameLength)) {
            valid = false;
        }

        // Regex test to make sure it contains only letters and numbers
        const containsLettersAndNumbers = /^[a-zA-Z0-9]+$/;

        if (!containsLettersAndNumbers.test(displayname)) {
            conditions.push("lettersAndNumbers");
            valid = false;
        }

        return { valid, conditions };

    },
    email: function(username) {
        // var displaynameRegex = /^[a-zA-Z0-9]+$/;
        return true;

    },
    password: function(username) {
        // var displaynameRegex = /^[a-zA-Z0-9]+$/;
        return true;

    },
}

export default validate;