import CustomValidator from "./customValidator.js";
import Messages from "../../../constants/messages.js"
export default class CustomUserValidator extends CustomValidator {
    constructor() {
        super();
        this.messages = new Messages()
    }

    validate(user) {
        let errors = [];


        errors.push(this.checkIdField(user.id));
        errors.push(this.checkFirstNameField(user.firstName));
        errors.push(this.checkLastNameField(user.lastName));


        return errors.filter(error => error !== undefined);
    }

    checkIdField(userId) {
        if (!userId || isNaN(userId)) {
            return this.messages.checkField("userId");
        }
    }

    checkFirstNameField(firstName) {
        if (!firstName || firstName.length < 3) {
            return this.messages.checkField("Ad");
        }
    }

    checkLastNameField(lastName) {
        if (!lastName || lastName.length < 5) {
            return this, this.messages.checkField("Soyad");
        }
    }
}