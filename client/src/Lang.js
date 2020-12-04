class Lang {
    constructor() {
        this.eng = {
            general: {
                navBar: {

                },
                welcome: {
                    createAccount: "Create an account",
                    useAsGuest: "Continue as Guest",
                    useAsGuestModal: {
                        areYouSure: "Use Guest Mode?",
                        description: "With guest mode, all classes are accessable but you won't be able to keep track of what you've done.",
                    },
                },
            },
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
                            // lengthShort: "Must be at least 8 characters",
                            // lengthLong: "Must be less than 128 characters",
                            // upperAndLower: "Must contain an uppercase and lowercase letter",
                            // number: "Must contain at least one number"
                        },
                        login: {
                            // eightChars: "Contains at least 8 characters",
                            // upperAndLower: "Contains uppercase and lowercase letters",
                            // oneNumber: "Contains at least one number"
                        }
                    },
                    email: {
                        register: {
                            // valid: "Must be a valid email address",
                            // lengthLong: "Must be less than 300 characters",
                        },
                        login: {
                            // lengthShort: "Contains at least 8 characters",
                            // upperAndLower: "Contains uppercase and lowercase letters",
                            // oneNumber: "Contains at least one number"
                        }
                    },
                    displayname: {
                        register: {
                            lengthShort: "Must be at least 3 characters",
                            lengthLong: "Must be less than 30 characters",
                            lettersAndNumbers: "Must only contain letters and numbers"
                        },
                    }

                }
            }

        }
        this.current = this.eng;
    }
}
export default (new Lang());