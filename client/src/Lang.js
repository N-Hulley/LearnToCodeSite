class Lang {
    constructor() {
        this.eng = {
            userEntry: {
                login: "Login",
                register: "Register",
                email: "E-mail",
                name: "Display Name",
                password: "Password",
                rememberMe: "Remember me",
                forgotPassword: "Forgot Password?",
                notMember: "Not a member?",

                hints: {
                    password: {
                        register: {
                            lengthShort: "Must be at least 8 characters",
                            lengthLong: "Must be less than 128 characters",
                            upperAndLower: "Must contain an uppercase and lowercase letter",
                            number: "Must contain at least one number"
                        },
                        login: {
                            eightChars: "Contains at least 8 characters",
                            upperAndLower: "Contains uppercase and lowercase letters",
                            oneNumber: "Contains at least one number"
                        }
                    },
                    email: {
                        register: {
                            valid: "Must be a valid email address",
                            lengthLong: "Must be less than 300 characters",
                        },
                        login: {
                            lengthShort: "Contains at least 8 characters",
                            upperAndLower: "Contains uppercase and lowercase letters",
                            oneNumber: "Contains at least one number"
                        }
                    },
                    displayname: {
                        register: {
                            lengthShort: "Must be at least 3 characters",
                            lengthLong: "Must be less than 30 characters",
                        },
                    }

                }
            }

        }
        this.current = this.eng;
    }
}
export default (new Lang());